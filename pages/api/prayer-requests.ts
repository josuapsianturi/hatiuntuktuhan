import type { NextApiRequest, NextApiResponse } from "next";
import { insertPrayerRequestSchema } from "../../shared/schema";
import { storage } from "../../server/storage";
import { notion, createDatabaseIfNotExists } from "../../server/notion";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const validatedData = insertPrayerRequestSchema.parse(req.body);
    // Simpan ke storage lokal
    const prayerRequest = await storage.createPrayerRequest(validatedData);

    // Simpan ke Notion jika env tersedia
    if (process.env.NOTION_INTEGRATION_SECRET && process.env.NOTION_PAGE_URL) {
      try {
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
        await notion.pages.create({
          parent: { database_id: newDb.id },
          properties: {
            Name: {
              title: [
                { text: { content: validatedData.name || "Anonymous" } }
              ]
            },
            Email: validatedData.email ? { email: validatedData.email } : { email: null },
            Message: {
              rich_text: [
                { text: { content: validatedData.message } }
              ]
            },
            Status: { select: { name: "New" } }
          }
        });
      } catch (notionError) {
        console.error("Failed to save to Notion:", notionError);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Prayer request submitted successfully",
      id: prayerRequest.id
    });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        error: "Invalid prayer request data",
        details: error.errors
      });
    }
    console.error("Error submitting prayer request:", error);
    return res.status(500).json({ error: "Failed to submit prayer request" });
  }
} 