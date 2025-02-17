const handleClearWebStorage = (arr: string[]) => {
  arr.forEach((element) => {
    localStorage.removeItem(element);
  });
};

export default handleClearWebStorage;
