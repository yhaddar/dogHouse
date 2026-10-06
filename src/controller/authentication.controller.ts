import {Login, Register} from "@/model/User";
import {NextRequest, NextResponse} from "next/server";
import {UserRequest} from "@/request/user.request";
import {sendToS3} from "@/utils/methods";

export class AuthenticationController {
    static async login(req: NextRequest){

        const user: Login = await req.json();

        return NextResponse.json(user);
    }

    static async register(req: NextRequest){
        try {
            const user: FormData = await req.formData();

            const users = {
                first_name: UserRequest.firstName(user.get("first_name")),
                last_name: UserRequest.lastName(user.get("last_name")),
                username: await UserRequest.username(user.get("username")),
                email: await UserRequest.email(user.get("email")),
                phone: await UserRequest.phone(user.get("phone")),
                password: UserRequest.password(user.get("password")),
                ville: UserRequest.ville(user.get("ville")),
                gender: UserRequest.gender(user.get("gender")),
                profile: ""
            }

            const image = user.get("profile");
            if(image instanceof File){
                const profile: string = UserRequest.profile(image);
                const buffer: Buffer<ArrayBuffer> = Buffer.from(await image.arrayBuffer());

                await sendToS3(image, profile, buffer);
                users.profile = profile;
            }

            return NextResponse.json(user.get("profile"));
        }catch (err){
            console.log(err);
            return NextResponse.json({
                message: err instanceof Error ? err.message : "unknow error",

            },{status: 400,} );
        }
    }
}