const routersDisabledLayout: string[] = [
  '/[slugCommunity]/events/[slug]',
  '/[slugCommunity]/events/[slug]/mission/[id]',
  '/[slugCommunity]/events/[slug]/loot-box',
  '/[slugCommunity]/events/[slug]/lucky-draw',
  '/[slugCommunity]/QA',
  '/[slugCommunity]/tournament/[slug]',
  '/[slugCommunity]/events',
];

const routersDisabledFooter: string[] = [
  '/[slugCommunity]/news',
  '/[slugCommunity]/news/[slug]',
  // '/',
  '/statements/[slug]',
  '/notification',
  '/notification/[slug]',
];

const routersDisabledHeader: string[] = ['/'];
const routersDisabledBackIcon: string[] = ['/', '/statements'];
const routersShowFilterIcon: string[] = ['/statements'];
const routersShowSearchIcon: string[] = ['/profile/list-course'];

export {
  routersDisabledLayout,
  routersDisabledFooter,
  routersDisabledHeader,
  routersDisabledBackIcon,
  routersShowFilterIcon,
  routersShowSearchIcon,
};
