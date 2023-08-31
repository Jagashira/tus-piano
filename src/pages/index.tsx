import { clientBlog, clientNews } from "@/modules/lib/client";
import HomeActivity from "@/components/Home/Activity/HomeActivity";
import HomeNews from "@/components/Home/HomeNews";
import HomeBlog from "@/components/Home/HomeBlog";
import Hero from "@/components/Home/Hero";
import HomeCalendar from "@/components/sections/HomeCalendar";

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
            <HomeActivity />
          </div>
          <div className="h-[100vh pt-[20vh]">
            <HomeNews newsGroup={news} />
          </div>
          <div className="h-[100vh] pt-[20vh]">
            <HomeBlog blogGroup={blog} />
          </div>
          <div className="h-[150vh] pt-[20vh]">
            <HomeCalendar />
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
