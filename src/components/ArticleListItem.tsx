import Link from "next/link";
import Image from "next/image";

import styles from "./../styles/ArticleListItem.module.css";
import { FormatDate } from "@/modules/lib/formattedData";

export default function ArticleListItem({ blog }: any) {
  return (
    <li className={styles.list}>
      <Link href={`/blog/id/${blog.id}`} className={styles.link}>
        {blog.image ? (
          <div
            style={{
              width: "250px",
              height: "250px",
              overflowY: "hidden",
            }}
          >
            <Image src={blog.image.url} alt="思い出" width={250} height={250} />
          </div>
        ) : (
          <div
            style={{
              width: "250px",
              height: "250px",
              backgroundColor: "black",
            }}
          ></div>
        )}
        <dl className={styles.content}>
          <dt className={styles.title}>{blog.title}</dt>
          {FormatDate(blog.publishedAt)}
          <dd className={styles.date}></dd>
        </dl>
      </Link>
    </li>
  );
}
