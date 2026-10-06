import {Gender} from "@/utils/interfaces";

export type Login = {
    email: string;
    password: string;
}

export type Register = {
    first_name: string;
    last_name: string;
    username: string;
    profile: string;
    email: string;
    phone: string;
    ville: string;
    password: string;
    gender: Gender;

}