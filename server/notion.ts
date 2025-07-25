import { Client } from "@notionhq/client";

// Initialize Notion client
export const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_SECRET!,
});

// Extract the page ID from the Notion page URL
function extractPageIdFromUrl(pageUrl: string): string {
    if (!pageUrl) {
        throw new Error("Page URL is required");
    }
    
    console.log("Extracting page ID from URL:", pageUrl);
    
    // Extract the last part of the URL which contains the page ID
    // Format: https://www.notion.so/username/Page-Title-233ade1dc59b80cc8dd7ff5489ab7253
    const urlParts = pageUrl.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    
    // Remove query parameters
    const cleanPart = lastPart.split('?')[0];
    
    // Extract 32-character hex string from the end
    const match = cleanPart.match(/([a-f0-9]{32})$/i);
    if (match && match[1]) {
        console.log("Extracted page ID:", match[1]);
        return match[1];
    }

    // Fallback: try to extract from anywhere in the URL
    const cleanUrl = pageUrl.replace(/-/g, '');
    const fallbackMatch = cleanUrl.match(/([a-f0-9]{32})/i);
    if (fallbackMatch && fallbackMatch[1]) {
        console.log("Extracted page ID (fallback):", fallbackMatch[1]);
        return fallbackMatch[1];
    }

    throw new Error(`Failed to extract page ID from URL: ${pageUrl}. Please check your NOTION_PAGE_URL format.`);
}

// Hardcode the correct page ID for now since environment variable update is having issues
const CORRECT_PAGE_URL = "https://www.notion.so/josuapsianturi/Hati-untuk-Tuhan-Prayer-Requests-233ade1dc59b80cc8dd7ff5489ab7253";

export const NOTION_PAGE_ID = process.env.NOTION_PAGE_URL && process.env.NOTION_PAGE_URL.includes("233ade1dc59b80cc8dd7ff5489ab7253") 
  ? extractPageIdFromUrl(process.env.NOTION_PAGE_URL) 
  : extractPageIdFromUrl(CORRECT_PAGE_URL);

/**
 * Lists all child databases contained within NOTION_PAGE_ID
 * @returns {Promise<Array<{id: string, title: string}>>} - Array of database objects with id and title
 */
export async function getNotionDatabases() {

    // Array to store the child databases
    const childDatabases = [];

    try {
        // Query all child blocks in the specified page
        let hasMore = true;
        let startCursor: string | undefined = undefined;

        while (hasMore) {
            const response = await notion.blocks.children.list({
                block_id: NOTION_PAGE_ID,
                start_cursor: startCursor,
            });

            // Process the results
            for (const block of response.results) {
                // Check if the block is a child database
                if ('type' in block && block.type === "child_database") {
                    const databaseId = block.id;

                    // Retrieve the database title
                    try {
                        const databaseInfo = await notion.databases.retrieve({
                            database_id: databaseId,
                        });

                        // Add the database to our list
                        childDatabases.push(databaseInfo);
                    } catch (error) {
                        console.error(`Error retrieving database ${databaseId}:`, error);
                    }
                }
            }

            // Check if there are more results to fetch
            hasMore = response.has_more;
            startCursor = response.next_cursor || undefined;
        }

        return childDatabases;
    } catch (error) {
        console.error("Error listing child databases:", error);
        throw error;
    }
}

// Find get a Notion database with the matching title
export async function findDatabaseByTitle(title: string) {
    const databases = await getNotionDatabases();

    for (const db of databases) {
        if ('title' in db && db.title && Array.isArray(db.title) && db.title.length > 0) {
            const dbTitle = db.title[0]?.plain_text?.toLowerCase() || "";
            if (dbTitle === title.toLowerCase()) {
                return db;
            }
        }
    }

    return null;
}

// Create a new database if one with a matching title does not exist
export async function createDatabaseIfNotExists(title: string, properties: any) {
    const existingDb = await findDatabaseByTitle(title);
    if (existingDb) {
        return existingDb;
    }
    return await notion.databases.create({
        parent: {
            type: "page_id",
            page_id: NOTION_PAGE_ID
        },
        title: [
            {
                type: "text",
                text: {
                    content: title
                }
            }
        ],
        properties
    });
}


// Example function to Get all tasks from the Notion database
export async function getTasks(tasksDatabaseId: string) {
    try {
        const response = await notion.databases.query({
            database_id: tasksDatabaseId,
        });

        return response.results.map((page: any) => {
            const properties = page.properties;

            const dueDate = properties.DueDate?.date?.start
                ? new Date(properties.DueDate.date.start)
                : null;

            const completedAt = properties.CompletedAt?.date?.start
                ? new Date(properties.CompletedAt.date.start)
                : null;

            return {
                notionId: page.id,
                title: properties.Title?.title?.[0]?.plain_text || "Untitled Task",
                description: properties.Description?.rich_text?.[0]?.plain_text || "",
                section: properties.Section?.select?.name || "Uncategorized",
                isCompleted: properties.Completed?.checkbox || false,
                dueDate,
                completedAt,
                priority: properties.Priority?.select?.name || null,
                status: properties.Status?.status?.name || null,
            };
        });
    } catch (error) {
        console.error("Error fetching tasks from Notion:", error);
        throw new Error("Failed to fetch tasks from Notion");
    }
}