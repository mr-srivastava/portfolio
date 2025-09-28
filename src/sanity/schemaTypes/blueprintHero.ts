interface BlueprintHeroField {
  name: string;
  title: string;
  type: string;
  validation?: (Rule: any) => any;
  description?: string;
  of?: Array<{
    type: string;
    fields?: Array<{
      name: string;
      title: string;
      type: string;
      validation?: (Rule: any) => any;
      description?: string;
    }>;
  }>;
}

interface BlueprintHeroSchema {
  name: string;
  title: string;
  type: string;
  fields: BlueprintHeroField[];
}

const blueprintHeroSchema: BlueprintHeroSchema = {
  name: 'blueprintHero',
  title: 'Blueprint Hero Section',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Professional Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Current professional role or title',
    },
    {
      name: 'isOnline',
      title: 'Online Status',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
      description: 'Whether the person is currently online/available',
    },
    {
      name: 'statusMessage',
      title: 'Status Message',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Current status message to display',
    },
    {
      name: 'techStackItems',
      title: 'Tech Stack Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
      description: 'Tech stack items to display in the hero section',
    },
  ],
};

export default blueprintHeroSchema;
