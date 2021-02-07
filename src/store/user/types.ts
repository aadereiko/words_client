export interface IUser {
    email: string;
    firstName: string;
    lastName: string;
    _id: string;
    updatedAt: string;
    createdAt: string;
}

export interface ILoginUser {
    email: string;
    password: string;
}

export interface ILoginUserResponse {
    user: IUser;
    token: string;
}