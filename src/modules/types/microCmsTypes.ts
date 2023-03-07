export interface Content {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  title: string;
  content: string;
}
export interface getCMSType {
  contents: Content[];
  totalCount: number;
  offset: number;
  limit: number;
}
