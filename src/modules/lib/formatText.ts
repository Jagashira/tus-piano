export const UpperCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const getLastPathSegment = (url: string) => {
  // const lastIndex = url.lastIndexOf("/");
  // const secondLastIndex = url.lastIndexOf("/", lastIndex - 1);
  // const name = url.substring(secondLastIndex + 1, lastIndex);
  const index1 = url.indexOf("/");
  const name = url.substring(index1 + 1);

  return name;
};
