import Link from "next/link";

export const Pagination = ({ totalCount, contentType }: any) => {
  const PER_PAGE = 5;

  const range = (start: any, end: any) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <ul style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li key={index}>
            <Link href={`/${contentType}/page/${number}`}>{number}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
