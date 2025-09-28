interface ProjectField {
  name: string;
  title: string;
  type: string;
  validation?: (Rule: any) => any;
  description?: string;
  options?: {
    list: Array<{ title: string; value: string }>;
  };
  of?: Array<{ type: string }>;
}

interface ProjectSchema {
  name: string;
  title: string;
  type: string;
  fields: ProjectField[];
}

const projectSchema: ProjectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Project ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Unique identifier for the project',
    },
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Brief description of the project',
    },
    {
      name: 'techStack',
      title: 'Technology Stack',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
      description: 'Technologies and tools used in this project',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Year the project was developed',
    },
    {
      name: 'status',
      title: 'Project Status',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Production', value: 'Production' },
          { title: 'Active', value: 'Active' },
          { title: 'Maintenance', value: 'Maintenance' },
          { title: 'Archived', value: 'Archived' },
        ],
      },
      description: 'Current status of the project',
    },
    {
      name: 'type',
      title: 'Project Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Type or category of the project',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
      description: 'Order in which the project should be displayed',
    },
  ],
};

export default projectSchema;
