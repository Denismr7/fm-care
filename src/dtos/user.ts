export interface IUserDTO {
    email: string;
}

export interface ILogin extends IUserDTO {
    password: string;
}