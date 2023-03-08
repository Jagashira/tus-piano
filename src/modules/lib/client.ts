import { createClient } from 'microcms-js-sdk';

const serviceDomain = "piano-tus";
const apiKey = process.env.NEXT_PUBLIC_MICRO_CMS_APY_KEY

export const clientNews = createClient({
  serviceDomain,
  // @ts-ignore
  apiKey
});

export const clientBlog = createClient({
  serviceDomain,
  // @ts-ignore
  apiKey
});