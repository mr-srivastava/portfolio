interface ContactField {
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

interface ContactSchema {
  name: string;
  title: string;
  type: string;
  fields: ContactField[];
}

const contactSchema: ContactSchema = {
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      description: 'Primary email address for contact',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Phone number for contact',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Current location (city, state/country)',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'Profile URL',
              type: 'url',
              description: 'Optional URL to the social media profile',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
      description: 'Social media platforms and links',
    },
    {
      name: 'isAvailable',
      title: 'Available for Work',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
      description: 'Whether currently available for new opportunities',
    },
    {
      name: 'availabilityMessage',
      title: 'Availability Message',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Message about current availability status',
    },
    {
      name: 'responseTime',
      title: 'Response Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Expected response time for inquiries',
    },
  ],
};

export default contactSchema;
