export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export type IResponseData = ILoginResponse | ICreateUser | IUser;

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: ILoginUser;
  token: string;
}

export interface ILoginUser {
  _id: string;
  userName: string;
  role: 'user' | 'admin';
}

export interface ICreateUser {
  userCreated: {
    _id: string;
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;
    country: string;
    role: 'user' | 'admin';
    profileImage: string;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface IForgetPassword {
  email: string;
}

export interface IResetPassword {
  seed: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  id: string;
  userName: string;
  email: string;
  phoneNumber: number;
  country: string;
  role: string;
  profileImage: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}