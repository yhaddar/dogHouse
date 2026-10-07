import {UserRepository} from "@/repository/user.repository";
import {Gender} from "@/utils/interfaces";
import {supportedImage} from "@/utils/methods";
import {randomUUID} from "node:crypto";
import {Login} from "@/model/User";

export class UserRequest {

    static firstName(firstName: FormDataEntryValue | null): string {
        if(!firstName)
            throw new Error("First name is required");

        if(firstName.toString().includes(" "))
            throw new Error("First name invalid");

        return firstName.toString();
    }

    static lastName(lastName: FormDataEntryValue | null): string {
        if(!lastName)
            throw new Error("Last name is required");

        if(lastName?.toString().includes(" "))
            throw new Error("Last name invalid");

        return lastName!.toString();
    }

    static async username(username: FormDataEntryValue | null): Promise<string> {
        if(!username){
            throw new Error("username is required");
        }

        if(username.toString().includes(" ")){
            throw new Error("username invalid");
        }

        if(await UserRepository.userByUserName(username.toString()))
            throw new Error("User name already exists");

        return username.toString();
    }

    static async email(email: FormDataEntryValue | null): Promise<string> {
        if(!email)
            throw new Error("the email is required");

        if(!email.toString().includes("@"))
            throw new Error("email invalid")

        if(await UserRepository.userByEmail(email.toString()))
            throw new Error("Email already exists");

        return email.toString();
    }

    static password(password: FormDataEntryValue | null): string {
        if(!password)
            throw new Error("password is required");

        if(password.toString().length < 8)
            throw new Error("Password must be at least 8 characters");

        return password.toString();
    }

    static async phone(phone: FormDataEntryValue | null): Promise<string> {
        if(!phone)
            throw new Error("phone is required");

        if(!phone.toString().startsWith("0"))
            throw new Error("Phone number is invalid");

        if(phone.toString().length != 10)
            throw new Error("Phone number must be 10 numbers");

        if(await UserRepository.userByPhone(phone.toString()))
            throw new Error("Phone already exists");

        return phone.toString();

    }

    static ville(ville: FormDataEntryValue | null): string{
        if(!ville)
            throw new Error("ville is required");

        return ville.toString();
    }

    static gender(gender: FormDataEntryValue | null): Gender {
        if(!gender)
            throw new Error("gender is required");

        return <Gender>gender.toString();
    }

    static profile(profile: File): string {

        if(!(profile instanceof File))
            throw new Error("profile is not of type File");
        else
            if(!supportedImage(profile.name.split(".")[1]))
                throw new Error("profile type is not supported");
        return `users/${randomUUID()}.${profile.name.split(".")[1]}`;
    }

    static async emailExist(email: string): Promise<Login | null> {
        if(!email)
            throw new Error("the email is required");

        if(!email.toString().includes("@"))
            throw new Error("email invalid")
        else {
            const findByEmail: Login | null = await UserRepository.findByEmail(email);
            if(findByEmail == null)
                throw new Error("Email does not exist");
            return findByEmail;
        }
    }

}