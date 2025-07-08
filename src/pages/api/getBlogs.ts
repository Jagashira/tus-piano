import { clientBlog } from "@/modules/lib/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Fetching blogs...");
  try {
    const blogs = await clientBlog.get({ endpoint: "blog" });
    console.log(blogs);
    res.status(200).json(blogs.contents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
}
