import React, { useState } from "react";
import dynamic from "next/dynamic";

// 動的にreact-markdown-editor-liteをインポート
const ReactMarkdownEditorLite = dynamic(
  () => import("react-markdown-editor-lite").then((mod) => mod.default),
  { ssr: false }
);

import "react-markdown-editor-lite/lib/index.css"; // CSSのインポート
import { clientBlog } from "@/modules/lib/client";

// MarkdownをHTMLに変換するための関数
const renderHTML = (text: string) => {
  const markdownit = require("markdown-it");
  const md = markdownit();
  return `<div class="blogContainer"><div class="content">${md.render(
    text
  )}</div></div>`;
};

const MarkdownEditor = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleEditorChange = (data: { text: string }) => {
    setContent(data.text);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async () => {
    // バリデーション: タイトル、本文、画像が必須
    if (!title || !content || !image) {
      alert("Please fill in all required fields: Title, Content, and Image.");
      return;
    }

    // 画像をMicroCMSにアップロード
    let imageUrl = "";
    try {
      const formData = new FormData();
      formData.append("file", image);

      const uploadResponse = await fetch(
        `https://piano-tus.microcms-management.io/api/v1/media`,
        {
          method: "POST",
          headers: {
            "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_APY_KEY!,
          },
          body: formData,
        }
      );

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image");
      }

      const uploadData = await uploadResponse.json();
      imageUrl = uploadData.url; // アップロード後に取得した画像のURL
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
      return;
    }

    // ブログデータ
    const blogData = {
      title,
      content,
      image: imageUrl,
    };
    console.log("Blog data:", blogData);
    console.log("Image URL:", imageUrl);

    // ブログデータをMicroCMSに投稿
    try {
      const res = await clientBlog.create({
        endpoint: "blog", // MicroCMSのブログエンドポイント
        content: blogData,
      });
      console.log("Blog created:", res);
      alert("Blog created successfully!");
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Blog</h2>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter blog title"
        />
      </div>

      <ReactMarkdownEditorLite
        value={content}
        style={{ height: "400px" }}
        onChange={handleEditorChange}
        renderHTML={renderHTML} // プレビュー機能を有効にするために必要
      />

      <div className="mb-4 mt-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={handleSubmit}
        >
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default MarkdownEditor;
