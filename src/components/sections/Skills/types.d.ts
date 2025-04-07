interface ISkill {
  title: string;
  description?: string;
  icon: React.ReactNode;
  iconKey: string;
}

interface ISkillGridItem extends ISkill {
  index: number;
}

interface ISkillGrid {
  features?: Array<ISkillGridItem>;
}
