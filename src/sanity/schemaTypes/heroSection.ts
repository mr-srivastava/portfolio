// schemas/heroSection.ts

interface HeroSectionField {
  name: string;
  title: string;
  type: string;
  validation?: (Rule: any) => any;
}

interface HeroSectionSchema {
  name: string;
  title: string;
  type: string;
  fields: HeroSectionField[];
}

export default {
  name: "heroSection",
  title: "Hero Section Content",
  type: "document",
  fields: [
    {
      name: "preface",
      title: "Preface",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "followup",
      title: "Follow-up",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "src",
      title: "Image Source URL",
      type: "url",
      validation: (Rule: any) =>
        Rule.required().uri({
          scheme: ["http", "https"],
        }),
    },
  ],
} as HeroSectionSchema;
