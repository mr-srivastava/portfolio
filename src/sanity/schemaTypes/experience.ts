interface ExperienceField {
  name: string;
  title: string;
  type: string;
  validation?: (Rule: any) => any;
  options?: {
    list?: { title: string; value: string }[];
  };
  of?: {
    type: string;
    options?: { list?: { title: string; value: string }[] };
  }[];
}

interface ExperienceSchema {
  name: string;
  title: string;
  type: string;
  fields: ExperienceField[];
}

const experienceSchema: ExperienceSchema = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      options: {
        list: [
          { title: "MakeMyTrip", value: "MakeMyTrip" },
          { title: "Zolo", value: "Zolo" },
          { title: "PwC India", value: "PwC India" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "place",
      title: "Place",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "startDate",
      title: "Start Date (Epoch)",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "endDate",
      title: "End Date (Epoch or null)",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "React", value: "React" },
              { title: "Next", value: "Next" },
              { title: "Javascript", value: "Javascript" },
              { title: "Typescript", value: "Typescript" },
              { title: "Redux", value: "Redux" },
              { title: "Node", value: "Node" },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default experienceSchema;
