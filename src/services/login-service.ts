import { ILogin, IUserDTO } from "../dtos/";

export const loginService = {
    login
}

function login({ email, password }: ILogin): IUserDTO {
    if (email === "admin@test.com") {
        return mockUser;
    } else {
        throw new Error("Login failed");
    }
}

const mockUser: IUserDTO = {
    email: 'admin@test.com'
}