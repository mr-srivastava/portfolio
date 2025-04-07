// schemas/overview.ts

interface OverviewField {
    name: string;
    title: string;
    type: string;
    validation?: (Rule: any) => any;
    rows?: number;
}

interface OverviewSchema {
    name: string;
    title: string;
    type: string;
    fields: OverviewField[];
}

export default {
    name: "overview",
    title: "Overview Content",
    type: "document",
    fields: [
        {
            name: "yoe",
            title: "Years of Experience",
            type: "string",
            validation: (Rule) =>
                Rule.required().regex(/^\d+$/, {
                    name: "numeric",
                    invert: false,
                    message: 'YOE must be a numeric string (e.g., "04")',
                }),
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            rows: 8,
            validation: (Rule) => Rule.required(),
        },
    ],
} as OverviewSchema;
