export interface IHeroContent {
  preface: string;
  content: string;
  followup: string;
  src: string;
}

export interface IHeroContentProps extends IHeroContent {
  className?: string;
}
