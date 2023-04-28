export function getStrapiImageUrl(url: string) {
    if (url.startsWith('http')) return url // the domain is predefined, ignore
    const path = url.startsWith('/') ? url : `/${url}`
    const fullUrl = `${process.env.STRAPI_CMS_URL}${path}`
    return fullUrl
}