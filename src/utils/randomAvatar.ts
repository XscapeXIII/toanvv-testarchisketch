function getRandomNumberFrom1to5(): number {
  return Math.floor(Math.random() * 5) + 1;
}

const randomAvatar = (index?: number) => {
  return `/images/avatar/img${index || getRandomNumberFrom1to5()}.png`;
};

export { randomAvatar };
