import { clientBlog, clientNews } from "@/modules/lib/client";
import HomeActivity from "@/components/Home/Activity/HomeActivity";
import HomeNews from "@/components/Home/HomeNews";
import HomeBlog from "@/components/Home/HomeBlog";
import Hero from "@/components/Home/Hero";
import HomeCalendar from "@/components/Calendar/HomeCalendar";
import styles from "@/styles/Home/Home.module.css";
import HomeFlyer from "@/components/Home/HomeFlyer";

export default function Home({ news, blog }: any) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.homeHero}>
          <Hero />
        </div>
        <div className={styles.backgroundOpacity}>
          <div className={styles.homeActivity}>
            <HomeActivity />
          </div>
          <div className={styles.homeNews}>
            <HomeNews newsGroup={news} />
          </div>
          <div className={styles.homeBlog}>
            <HomeBlog blogGroup={blog} />
          </div>
          <div>
            <HomeFlyer/>
          </div>
          {/* <div className={styles.homeCalendar}>
            <HomeCalendar />
          </div> */}
          
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
