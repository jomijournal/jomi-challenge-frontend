const getImageUrl = (src: string): string => {
  return process.env.STRAPI_CMS_URL + src;
};

export default getImageUrl;
