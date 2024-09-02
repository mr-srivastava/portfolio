interface ISkill {
  title: string;
  description?: string;
  icon: React.ReactNode;
}

interface ISkillGridItem extends ISkill {
  index: number;
}

interface ISkillGrid {
  features?: Array<ISkillGridItem>;
}
