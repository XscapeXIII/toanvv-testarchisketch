export const generateColorByIndex = (index: number) => {
  const n = (index * 0xfffff * 1000000000).toString(16);
  return '#' + n.slice(0, 6);
};
