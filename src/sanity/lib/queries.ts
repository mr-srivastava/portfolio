export const overviewQuery = `*[_type == "overview"][0] {
    yoe,
    description
  }`;

export const heroSectionQuery = `*[_type == "heroSection"][0] {
    preface,
    content,
    followup,
    src
  }`;

export const experiencesQuery = `*[_type == "experience"] | order(startDate desc) {
    position,
    company,
    place,
    startDate,
    endDate,
    description,
    techStack
  }`;

export const skillsQuery = `*[_type == "skill"] | {
    title,
    description,
    iconKey
  }`;
