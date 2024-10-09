import { getNewAccessToken } from "./../../services/auth.service";

// import { ResponseErrorType } from "@/types/common";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage("accessToken");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    return response;
  },
  async function (error) {
    const config = error?.config;
    if (error?.response?.status === 500 && !config?.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      const accessToken = response?.data?.data?.accessToken;
      config.headers["Authorization"] = accessToken;
      setToLocalStorage("accessToken", accessToken);
      return instance(config);
    } else {
      return Promise.reject(error);
    }
  }
);

export { instance };
