export const getBaseUrl = (): string => {
  return import.meta.env.VITE_API_BASE_URL || "http:localhost:5000/api/v1";
};
