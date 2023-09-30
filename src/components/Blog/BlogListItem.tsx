import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/Blog/Blog.module.css";
import { FormatDate } from "@/modules/lib/formattedData";

export default function BlogListItem({ blog }: any) {
  return (
    <li className={styles.list}>
      <Link href={`/blog/id/${blog.id}`} className={styles.link}>
        {blog.image ? (
          <div className={styles.imageContainer}>
            <Image
              src={blog.image.url}
              alt="思い出"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : (
          <div className={styles.imageContainer}>
            <Image
              src="/img/no_image/noimage.png"
              alt="思い出"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className={styles.content}>
          <dt className={styles.title}>{blog.title}</dt>

          <dd className={styles.date}>{FormatDate(blog.publishedAt)}</dd>
        </div>
      </Link>
      <hr className={styles.hrStyle} />
    </li>
  );
}
