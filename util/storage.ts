export const getItemFromStorage = (key: string) => {
  if (localStorage.getItem(key)) {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (e) {
      return localStorage.getItem(key);
    }
  } else {
    return false;
  }
};
