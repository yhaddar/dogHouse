import {Login, Register} from "@/model/User";
import {NextRequest, NextResponse} from "next/server";
import {UserRequest} from "@/request/user.request";
import {hashedPassword, sendToS3} from "@/utils/methods";
import {UserRepository} from "@/repository/user.repository";

export class AuthenticationController {
    static async login(req: NextRequest){

        const user: Login = await req.json();

        return NextResponse.json(user);
    }

    static async register(req: NextRequest){
        try {
            const userBody: FormData = await req.formData();

            const user = {
                first_name: UserRequest.firstName(userBody.get("first_name")),
                last_name: UserRequest.lastName(userBody.get("last_name")),
                username: await UserRequest.username(userBody.get("username")),
                email: await UserRequest.email(userBody.get("email")),
                phone: await UserRequest.phone(userBody.get("phone")),
                password: await hashedPassword(UserRequest.password(userBody.get("password"))),
                ville: UserRequest.ville(userBody.get("ville")),
                gender: UserRequest.gender(userBody.get("gender")),
                profile: ""
            }

            const image = userBody.get("profile");
            if(image instanceof File){
                const profile: string = UserRequest.profile(image);
                const buffer: Buffer<ArrayBuffer> = Buffer.from(await image.arrayBuffer());
                console.log(user.password);
                await sendToS3(image, profile, buffer);
                user.profile = profile;
            }

            const result: string = await UserRepository.store(user);

            return NextResponse.json(result);
        }catch (err){
            return NextResponse.json({
                message: err instanceof Error ? err.message : "unknow error",

            },{status: 400,} );
        }
    }
}