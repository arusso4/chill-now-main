import { defineType, defineField } from "sanity";

export default defineType({
  name: "variant", 
  title: "Variant", 
  type: "object",
  fields: [
    defineField({ name: "sku", type: "string", validation: r=>r.required() }),
    defineField({ name: "price", type: "number", validation: r=>r.required().min(0) }),
    defineField({ name: "size", type: "string" }),
  ]
});
