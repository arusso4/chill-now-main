export const GROQ_ALL_PRODUCTS = `
*[_type == "product"]|order(coalesce(publishedAt,_updatedAt) desc){
  _id, "slug": slug.current, title,
  "brand": brand->name,
  "categories": categories[]->title,
  "imageUrl": coalesce(mainImage.asset->url, images[0].asset->url),
  variants[]{ sku, price, size },
  featured
}`;

export const GROQ_FEATURED = `
*[_type == "product" && featured == true][0...12]{
  _id, "slug": slug.current, title,
  "brand": brand->name,
  "imageUrl": coalesce(mainImage.asset->url, images[0].asset->url),
  "variant": variants[0]{ sku, price, size }
}`;

export const GROQ_ALL_DROPS = `
*[_type == "drop"]|order(startAt desc){
  _id, title, "slug": slug.current, startAt, endAt,
  heroImage{asset->{url}}, featured
}`;

export const GROQ_DROP_DETAIL = `
*[_type == "drop" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, startAt, endAt,
  heroImage{asset->{url}},
  products[]{
    product->{
      _id, title, "slug": slug.current, "brand": brand->name,
      "imageUrl": coalesce(mainImage.asset->url, images[0].asset->url),
      variants[]{ sku, price, size }
    },
    variantSku, price, cap
  }
}`;
