import { type SchemaTypeDefinition } from "sanity";
import overview from "./overview";
import heroSection from "./heroSection";
import experienceSchema from "./experience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [overview, heroSection, experienceSchema],
};
