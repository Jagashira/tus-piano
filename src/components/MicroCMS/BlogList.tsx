import { useEffect, useState } from "react";

interface Blog {
  id: string;
  title: string;
  content: string;
}

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[] | null>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/getBlogs");
      const data = (await res.json()) as Blog[];
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Blog List</h2>
      <ul>
        {blogs?.map((blog) => (
          <li
            key={blog.id}
            className="mb-4 p-4 border border-gray-300 rounded-md"
          >
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
