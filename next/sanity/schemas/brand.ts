import { defineType, defineField } from "sanity";

export default defineType({
  name: "brand", 
  title: "Brand", 
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: r=>r.required() }),
    defineField({ name: "logo", type: "image" }),
  ]
});
