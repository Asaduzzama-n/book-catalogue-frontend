export const setToLocalStorage = (key: string, token: string) => {
  // console.log(token, "local-storage");
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  // console.log(token, "local-storage");
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};
