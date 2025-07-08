import BlogList from "@/components/MicroCMS/BlogList";
import CreateBlogForm from "@/components/MicroCMS/CreateBlogForm";
import MarkdownEditor from "@/components/MicroCMS/MarkdownEditor";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto p-4">
        <MarkdownEditor />
      </div>
    </div>
  );
};

export default Home;
