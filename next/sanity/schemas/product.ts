import { defineType, defineField } from "sanity";

export default defineType({
  name: "product", 
  title: "Product", 
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: r=>r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: r=>r.required() }),
    defineField({ name: "brand", type: "reference", to: [{ type: "brand" }] }),
    defineField({ name: "categories", type: "array", of: [{ type: "reference", to: [{ type: "category" }] }] }),
    defineField({ name: "mainImage", type: "image" }),
    defineField({ name: "images", type: "array", of: [{ type: "image" }] }),
    defineField({ name: "variants", type: "array", of: [{ type: "variant" }], validation: r=>r.min(1) }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "publishedAt", type: "datetime" }),
  ]
});