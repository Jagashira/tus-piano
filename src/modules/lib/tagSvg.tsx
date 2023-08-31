import { MoreArrowBlog, MoreArrowNews } from "./textStyle";
import { Icon } from "@iconify/react";
import styleNews from "@/styles/Home/HomeNews.module.css";

export const TagSvg = ({ tag }: any): JSX.Element => {
  if (tag === "イベント") {
    return (
      <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full mr-[1vw]">
        <Icon icon="ic:baseline-event" style={{ fontSize: 20 }} />
        {tag}
      </div>
    );
  } else if (tag === "コンサート") {
    return (
      <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full  mr-[1vw]">
        <Icon icon="basil:music-solid" style={{ fontSize: 20 }} />
        {tag}
      </div>
    );
  } else if (tag === "重要") {
    return (
      <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full  mr-[1vw]">
        <Icon icon="fluent:important-20-filled" style={{ fontSize: 20 }} />
        {tag}
      </div>
    );
  } else {
    return (
      <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border mr-[1vw]">
        <Icon icon="basil:other-1-outline" style={{ fontSize: 20 }} />
        その他
      </div>
    );
  }
};

export const MoreArrowSvgNews = (): JSX.Element => {
  return (
    <MoreArrowNews>
      <p className={styleNews.arrow}>もっと見る</p>
      <Icon icon="ion:arrow-redo" className={styleNews.arrow} />
    </MoreArrowNews>
  );
};

export const MoreArrowSvgBlog = (): JSX.Element => {
  return (
    <MoreArrowBlog>
      <p>もっと見る</p>
      <Icon icon="ion:arrow-redo" />
    </MoreArrowBlog>
  );
};
