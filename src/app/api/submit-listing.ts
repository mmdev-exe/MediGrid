import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const apiUrl = "https://559h09g3y1.execute-api.us-east-1.amazonaws.com/Sub/submit-listing"; // Corrected URL for /submit-listing resource
    console.log("Proxying request to:", apiUrl);
    console.log("Request body:", req.body);

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    // Add API key if required
    // const apiKey = "your-api-key-here"; // Replace with your actual API key
    // headers["x-api-key"] = apiKey;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: req.body,
    });

    console.log("Response status:", response.status);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Response data:", data);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error proxying request:", error);
    res.status(500).json({ message: `Failed to submit listing: ${error instanceof Error ? error.message : 'Unknown error'}` });
  }
}