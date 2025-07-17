import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
      if (!response.ok) throw new Error("Failed to fetch scripture");
      return response.json();
    });

    const scriptures = await Promise.all(scripturePromises);
    res.status(200).json(scriptures);
  } catch (error) {
    console.error("Error fetching scriptures:", error);
    res.status(500).json({ error: "Failed to fetch scriptures" });
  }
} 