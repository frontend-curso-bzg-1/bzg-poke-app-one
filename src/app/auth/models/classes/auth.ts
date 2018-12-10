import { ILogin } from "../interfaces/auth";

export class Login implements ILogin{
    email: string;
    password: string;

    constructor(){}
}