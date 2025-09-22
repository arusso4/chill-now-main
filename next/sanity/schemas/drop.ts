import { defineType, defineField } from "sanity";

export default defineType({
  name: "drop", 
  title: "Drop", 
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: r=>r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: r=>r.required() }),
    defineField({ name: "startAt", type: "datetime", validation: r=>r.required() }),
    defineField({ name: "endAt", type: "datetime", validation: r=>r.required() }),
    defineField({ name: "heroImage", type: "image" }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "products", type: "array", of: [{
      type: "object",
      fields: [
        { name: "product", type: "reference", to: [{type: "product"}], validation: r=>r.required() },
        { name: "variantSku", type: "string" },
        { name: "price", type: "number" },
        { name: "cap", type: "number" },
      ]
    }]})
  ]
});