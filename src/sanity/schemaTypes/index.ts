import { type SchemaTypeDefinition } from "sanity";
import overview from "./overview";
import heroSection from "./heroSection";
import experienceSchema from "./experience";
import skillSchema from "./skill";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [overview, heroSection, experienceSchema, skillSchema],
};
