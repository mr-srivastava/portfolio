interface SkillField {
  name: string;
  title: string;
  type: string;
  validation?: (Rule: any) => any;
  rows?: number;
  description?: string;
}

interface SkillSchema {
  name: string;
  title: string;
  type: string;
  fields: SkillField[];
}

const skillSchema: SkillSchema = {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "iconKey",
      title: "Icon Key (for mapping in frontend)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default skillSchema;
