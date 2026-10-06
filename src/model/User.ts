import {User} from "@/generated/prisma/client";

export type Login = {
    email: string;
    password: string;
}

export type UserModel = User;