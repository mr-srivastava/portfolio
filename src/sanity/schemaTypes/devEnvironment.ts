interface DevEnvironmentField {
  name: string;
  title: string;
  type: string;
  validation?: (Rule: any) => any;
  description?: string;
  of?: Array<{ type: string }>;
}

interface DevEnvironmentSchema {
  name: string;
  title: string;
  type: string;
  fields: DevEnvironmentField[];
}

const devEnvironmentSchema: DevEnvironmentSchema = {
  name: 'devEnvironment',
  title: 'Development Environment',
  type: 'document',
  fields: [
    {
      name: 'machine',
      title: 'Machine',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Hardware machine used for development',
    },
    {
      name: 'operatingSystem',
      title: 'Operating System',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Primary operating system used for development',
    },
    {
      name: 'ide',
      title: 'IDE/Code Editor',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Integrated Development Environment or code editor',
    },
    {
      name: 'terminal',
      title: 'Terminal/Shell',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Terminal application and shell configuration',
    },
    {
      name: 'versionControl',
      title: 'Version Control',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Version control system and platform',
    },
    {
      name: 'packageManager',
      title: 'Package Manager',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Package managers used for dependency management',
    },
    {
      name: 'tools',
      title: 'Development Tools',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
      description: 'List of development tools and applications used',
    },
    {
      name: 'currentFocus',
      title: 'Current Learning Focus',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
      description: 'Current areas of learning and professional development',
    },
  ],
};

export default devEnvironmentSchema;
