interface SkillField {
  name: string;
  title: string;
  type: string;
  validation?: (Rule: any) => any;
  rows?: number;
  description?: string;
  options?: {
    list: Array<{ title: string; value: string }>;
  };
  of?: Array<{ type: string }>;
}

interface SkillSchema {
  name: string;
  title: string;
  type: string;
  fields: SkillField[];
}

const skillSchema: SkillSchema = {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'iconKey',
      title: 'Icon Key (for mapping in frontend)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Cloud', value: 'cloud' },
          { title: 'Mobile', value: 'mobile' },
        ],
      },
      description: 'Skill category for grouping in tech stack',
    },
    {
      name: 'proficiencyLevel',
      title: 'Proficiency Level (%)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(100),
      description: 'Skill level as percentage (0-100)',
    },
    {
      name: 'items',
      title: 'Technology Items',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Specific technologies or tools in this skill category',
    },
  ],
};

export default skillSchema;
