import { type SchemaTypeDefinition } from 'sanity';
import overview from './overview';
import heroSection from './heroSection';
import experienceSchema from './experience';
import skillSchema from './skill';
import projectSchema from './project';
import blueprintHeroSchema from './blueprintHero';
import contactSchema from './contact';
import devEnvironmentSchema from './devEnvironment';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    overview,
    heroSection,
    experienceSchema,
    skillSchema,
    projectSchema,
    blueprintHeroSchema,
    contactSchema,
    devEnvironmentSchema,
  ],
};
