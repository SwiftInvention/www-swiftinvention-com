export interface RouteProps {
  name: string;
  link: string;
  isInHeader: boolean;
  isInFooter: boolean;
}

export const getByName = (
  routes: Array<RouteProps>,
  name: string
): RouteProps => {
  const filtered = routes.filter((r) => r.name === name);
  return (filtered && filtered[0]) || '';
};

export const routes: Array<RouteProps> = [
  {
    name: 'Home',
    link: '/',
    isInHeader: false,
    isInFooter: true,
  },
  // {
  //   name: 'New Products',
  //   link: '/products',
  //   isInHeader: true,
  //   isInFooter: true,
  // },
  {
    name: 'Services',
    link: '/services',
    isInHeader: true,
    isInFooter: true,
  },
  {
    name: 'Case Studies',
    link: '/cases',
    isInHeader: true,
    isInFooter: true,
  },
  {
    name: 'Careers',
    link: '/careers',
    isInHeader: true,
    isInFooter: true,
  },
  {
    name: 'TechStack',
    link: '/tech-stack',
    isInHeader: false,
    isInFooter: false,
  },
  {
    name: 'News',
    link: '/news',
    isInHeader: false,
    isInFooter: false,
  },
  {
    name: 'Contact Us',
    link: '/feedback',
    isInHeader: true,
    isInFooter: true,
  },
  {
    name: 'Error',
    link: '/error',
    isInHeader: false,
    isInFooter: false,
  },
  {
    name: 'Azigo',
    link: '/azigo',
    isInFooter: false,
    isInHeader: false,
  },
  {
    name: 'Confyrm',
    link: '/confyrm',
    isInFooter: false,
    isInHeader: false,
  },
  {
    name: 'Privo',
    link: '/privo',
    isInFooter: false,
    isInHeader: false,
  },
  {
    name: 'BelBella',
    link: '/belbella',
    isInFooter: false,
    isInHeader: false,
  },
  {
    name: 'Blank Slate Technologies',
    link: '/blankslate',
    isInFooter: false,
    isInHeader: false,
  },
  {
    name: 'EVERSANA',
    link: '/eversana',
    isInFooter: false,
    isInHeader: false,
  },
  {
    name: 'EatNakedKitchen',
    link: '/eatnakedkitchen',
    isInFooter: false,
    isInHeader: false,
  },
  {
    name: 'MyBlueSkies',
    link: '/myblueskies',
    isInFooter: false,
    isInHeader: false,
  },
];
