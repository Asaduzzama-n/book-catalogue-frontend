export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type ResponseErrorType = {
  statusCode: number;
  message?: string;
  errorMessages?: IGenericErrorMessage[];
};

export interface ISignupUserData {
  name: {
    firstName: string;
  };
  email: string;
  password: string;
}
