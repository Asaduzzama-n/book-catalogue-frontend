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
    // const responseObject: ResponseSuccessType = {
    //   data: response?.data?.data,
    //   meta: response?.data?.meta,
    // };
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    const config = error?.config;
    if (error?.response?.status === 500 && !config?.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      console.log(response);
      const accessToken = response?.data?.data?.accessToken;
      config.headers["Authorization"] = accessToken;
      setToLocalStorage("accessToken", accessToken);
      return instance(config);
    } else {
      //   const responseObject: ResponseErrorType = {
      //     statusCode: error?.response?.data?.statusCode || 500,
      //     message: error?.response?.data?.message || "Something wen wrong!",
      //     errorMessages: error?.response?.data?.messages,
      //   };
      return Promise.reject(error);
    }
  }
);

export { instance };
