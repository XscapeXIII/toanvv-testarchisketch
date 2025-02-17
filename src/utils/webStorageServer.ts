import nookies from 'nookies';

const getCookiesByKey = (context: any, key: string) => {
  const value = nookies.get(context)[key];
  return value;
};

const setCookiesByKey = (context: any, key: string, value: any) => {
  nookies.set(context, key, value);
};

const deleteCookiesByKey = (ctx: any, key: string, option: object) =>
  nookies.destroy(ctx, key, option);

export { getCookiesByKey, setCookiesByKey, deleteCookiesByKey };
