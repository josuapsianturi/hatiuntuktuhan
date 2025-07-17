import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPrayerRequestSchema } from "@shared/schema";
import { z } from "zod";
import { notion, NOTION_PAGE_ID, createDatabaseIfNotExists } from "./notion";

export async function registerRoutes(app: Express): Promise<Server> {
  // Try to initialize Notion database for prayer requests (optional)
  let notionEnabled = false;
  try {
    if (process.env.NOTION_INTEGRATION_SECRET && process.env.NOTION_PAGE_URL) {
      await createDatabaseIfNotExists("Prayer Requests", {
        Name: {
          title: {}
        },
        Email: {
          email: {}
        },
        Message: {
          rich_text: {}
        },
        "Created Date": {
          created_time: {}
        },
        Status: {
          select: {
            options: [
              { name: "New", color: "blue" },
              { name: "Praying", color: "yellow" },
              { name: "Answered", color: "green" }
            ]
          }
        }
      });
      notionEnabled = true;
      console.log("✅ Notion integration enabled for prayer requests");
    } else {
      console.log("⚠️ Notion integration disabled - missing credentials");
    }
  } catch (error) {
    console.error("⚠️ Notion integration failed:", error instanceof Error ? error.message : String(error));
    console.log("📝 Prayer requests will be stored locally only");
  }

  // Bible API endpoint - fetch daily verse
  app.get("/api/scripture/daily", async (req, res) => {
    try {
      // Get multiple verses for the slider
      const verses = [
        "john+3:16",
        "matthew+22:37",
        "jeremiah+29:11",
        "romans+8:28",
        "philippians+4:13",
        "psalm+23:1",
        "isaiah+41:10"
      ];

      const randomVerse = verses[Math.floor(Math.random() * verses.length)];
      const response = await fetch(`https://bible-api.com/${randomVerse}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch scripture");
      }
      
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Error fetching scripture:", error);
      res.status(500).json({ error: "Failed to fetch daily scripture" });
    }
  });

  // Get multiple scriptures for slider
  app.get("/api/scripture/collection", async (req, res) => {
    try {
      const verses = [
        "john+3:16",
        "matthew+22:37", 
        "jeremiah+29:11",
        "romans+8:28",
        "philippians+4:13"
      ];

      const scripturePromises = verses.map(async (verse) => {
        const response = await fetch(`https://bible-api.com/${verse}`);
        return response.json();
      });

      const scriptures = await Promise.all(scripturePromises);
      res.json(scriptures);
    } catch (error) {
      console.error("Error fetching scriptures:", error);
      res.status(500).json({ error: "Failed to fetch scriptures" });
    }
  });

  // Prayer request endpoint
  app.post("/api/prayer-requests", async (req, res) => {
    try {
      const validatedData = insertPrayerRequestSchema.parse(req.body);
      
      // Always save to local storage first
      const prayerRequest = await storage.createPrayerRequest(validatedData);
      
      // Try to save to Notion if enabled and working
      if (notionEnabled) {
        try {
          console.log("🔍 Attempting to save prayer request to Notion...");
          
          // First, try to create the database directly in the page
          console.log("📝 Creating Prayer Requests database in Notion page...");
          const newDb = await createDatabaseIfNotExists("Prayer Requests", {
            Name: { title: {} },
            Email: { email: {} },
            Message: { rich_text: {} },
            "Created Date": { created_time: {} },
            Status: {
              select: {
                options: [
                  { name: "New", color: "blue" },
                  { name: "Praying", color: "yellow" },
                  { name: "Answered", color: "green" }
                ]
              }
            }
          });
          
          console.log("📊 Database created/found:", newDb.id);

          // Now save the prayer request to the database
          const result = await notion.pages.create({
            parent: {
              database_id: newDb.id
            },
            properties: {
              Name: {
                title: [
                  {
                    text: {
                      content: validatedData.name || "Anonymous"
                    }
                  }
                ]
              },
              Email: validatedData.email ? {
                email: validatedData.email
              } : { email: null },
              Message: {
                rich_text: [
                  {
                    text: {
                      content: validatedData.message
                    }
                  }
                ]
              },
              Status: {
                select: {
                  name: "New"
                }
              }
            }
          });
          
          console.log("✅ Prayer request successfully saved to Notion!");
          console.log("📋 Notion page ID:", result.id);
        } catch (notionError) {
          console.error("⚠️ Failed to save to Notion:", notionError instanceof Error ? notionError.message : String(notionError));
          console.log("📝 Prayer request saved locally only");
          console.log("💡 Check: 1) Integration connected to page 2) Page permissions 3) Integration capabilities");
        }
      } else {
        console.log("⚠️ Notion integration is disabled");
      }
      
      res.json({ 
        success: true, 
        message: "Prayer request submitted successfully",
        id: prayerRequest.id 
      });
    } catch (error) {
      console.error("Error submitting prayer request:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Invalid prayer request data",
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          error: "Failed to submit prayer request" 
        });
      }
    }
  });

  // Get all prayer requests (admin endpoint)
  app.get("/api/prayer-requests", async (req, res) => {
    try {
      const prayerRequests = await storage.getPrayerRequests();
      res.json(prayerRequests);
    } catch (error) {
      console.error("Error fetching prayer requests:", error);
      res.status(500).json({ 
        error: "Failed to fetch prayer requests" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
