import Link from "next/link";
import Image from "next/image";

import styles from "./../styles/ArticleListItem.module.css";
import { FormatDate } from "@/modules/lib/formattedData";

export default function ArticleListItem({ blog }: any) {
  return (
    <li className={styles.list}>
      <Link href={`/blog/id/${blog.id}`} className={styles.link}>
        {blog.image ? (
          <Image src={blog.image.url} alt="思い出" width={300} height={200} />
        ) : (
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "black",
            }}
          ></div>
        )}
        <dl className={styles.content}>
          <dt className={styles.title}>{blog.title}</dt>
          <dd></dd>
          <dd className={styles.date}></dd>
        </dl>
      </Link>
    </li>
  );
}
