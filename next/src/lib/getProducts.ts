import { serverClient } from "./sanity.client";

export interface Product {
  _id: string;
  title: string;
  slug: string;
  brand: {
    _id: string;
    title: string;
    slug: string;
  } | null;
  categories: Array<{
    _id: string;
    title: string;
    slug: string;
  }>;
  image: any | null;
  price: number | null;
}

const GROQ_PRODUCTS_QUERY = `
*[_type == "product"]{
  _id,
  title,
  "slug": coalesce(slug.current, ""),
  "brand": brand->{
    _id, 
    title, 
    "slug": coalesce(slug.current, "")
  },
  "categories": coalesce(categories[]->{
    _id, 
    title, 
    "slug": coalesce(slug.current, "")
  }, []),
  "image": coalesce(mainImage, null),
  price
} | order(_createdAt desc)
`;

export async function getProducts(): Promise<Product[]> {
  try {
    if (!serverClient) {
      console.warn("Sanity client not available, returning empty products array");
      return [];
    }

    const products = await serverClient.fetch<Product[]>(GROQ_PRODUCTS_QUERY);
    
    // Ensure we always return an array, even if Sanity returns null/undefined
    return Array.isArray(products) ? products : [];
  } catch (error) {
    console.error("Error fetching products from Sanity:", error);
    // Return empty array on error to prevent page crashes
    return [];
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    if (!serverClient) {
      console.warn("Sanity client not available, returning empty featured products array");
      return [];
    }

    const featuredQuery = `
      *[_type == "product" && featured == true]{
        _id,
        title,
        "slug": coalesce(slug.current, ""),
        "brand": brand->{
          _id, 
          title, 
          "slug": coalesce(slug.current, "")
        },
        "categories": coalesce(categories[]->{
          _id, 
          title, 
          "slug": coalesce(slug.current, "")
        }, []),
        "image": coalesce(mainImage, null),
        price
      } | order(_createdAt desc) [0...12]
    `;

    const products = await serverClient.fetch<Product[]>(featuredQuery);
    return Array.isArray(products) ? products : [];
  } catch (error) {
    console.error("Error fetching featured products from Sanity:", error);
    return [];
  }
}
