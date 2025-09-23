import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import product from "./sanity/schemas/product";
import variant from "./sanity/schemas/variant";
import brand from "./sanity/schemas/brand";
import category from "./sanity/schemas/category";
import drop from "./sanity/schemas/drop";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "chillnow-studio",
  title: "chillNOW Studio",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: { types: [product, variant, brand, category, drop] },
});
