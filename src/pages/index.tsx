import { CalendarContainer } from "@/utils/uiExport";
import Hero from "@/components/sections/Hero";
import NewBlog from "@/components/NewBlog";
import NewNews from "@/components/NewNews";
import { clientBlog, clientNews } from "@/modules/lib/client";
import NewActivity from "@/components/NewActivity";

export default function Home({ news, blog }: any) {
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative h-[100vh]">
          <Hero />
        </div>
        <div
          className="relative"
          style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
        >
          <div className="h-[100vh pt-[20vh]">
            <NewActivity />
          </div>
          <div className="h-[100vh pt-[20vh]">
            <NewNews newsGroup={news} />
          </div>
          <div className="h-[100vh] pt-[20vh]">
            <NewBlog blogGroup={blog} />
          </div>
          <div className="h-[150vh] pt-[20vh]">
            <CalendarContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const dataNews = await clientNews.get({
    endpoint: "news",
    queries: { offset: 0, limit: 5 },
  });
  const dataBlog = await clientBlog.get({
    endpoint: "blog",
    queries: { offset: 0, limit: 3 },
  });

  return {
    props: {
      news: dataNews.contents,
      blog: dataBlog.contents,
    },
  };
};
