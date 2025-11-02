import { Project, CompanyId } from './types';

export const COMPANY_LOGOS: Record<CompanyId, string> = {
  pwc: '/PwCIndia.svg',
  zolo: '/Zolo.svg',
  mmt: '/MakeMyTrip.svg',
} as const;

export const projectsData: Project[] = [
  {
    id: '4',
    title: 'Octane Type',
    description:
      'A fast, interactive typing test app built with modern UI/UX principles and smooth animations to track speed and accuracy.',
    type: 'personal',
    link: 'https://octane-type.vercel.app/',
    imageUrl: '/Octane.png',
    imagePosition: 'center',
  },
  {
    id: '3',
    title: 'Where2Go',
    description:
      'An inspirational travel discovery platform within MakeMyTrip that helps users find trip ideas, destinations, and experiences.',
    type: 'job',
    link: 'https://makemytrip.com/tripideas',
    imageUrl: '/Where2Go.png',
    companyId: 'mmt',
    imagePosition: 'left center',
  },
  {
    id: '1',
    title: 'Zolo Stays',
    description:
      'A modern co-living and managed accommodation platform offering hassle-free rental experiences across major cities in India.',
    type: 'job',
    link: 'https://zolostays.com/',
    imageUrl: '/Zolo.png',
    companyId: 'zolo',
    imagePosition: 'center top',
  },
  {
    id: '2',
    title: 'Z Vacations',
    description:
      'A curated resort and staycation platform offering villas, holiday homes, and boutique resorts for relaxed getaways.',
    type: 'job',
    link: 'https://z.vacations',
    imageUrl: '/ZVacation.png',
    companyId: 'zolo',
    imagePosition: 'center',
  },
] as const;
