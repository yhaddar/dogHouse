import {Login} from "@/model/User";
import {NextRequest, NextResponse} from "next/server";
import {UserRequest} from "@/request/user.request";
import {comparePassword, hashedPassword, sendToS3, token} from "@/utils/methods";
import {UserRepository} from "@/repository/user.repository";
import {StoreRepository} from "@/repository/store.repository";
import {Cookies} from "@/utils/cookies";

export class AuthenticationController {
    static async login(req: NextRequest){

        try {

            const userBody: Login = await req.json();

            const user = {
                email: await UserRequest.emailExist(userBody.email),
                password: UserRequest.password(userBody.password),
            }

            if(user.email instanceof Object){

                const compare: boolean = await comparePassword(user.email.password, user.password);
                if(compare) {
                    const t: string = token();
                    if(t)
                        await Cookies.store(t);
                        await StoreRepository.store(user.email.id, token());
                }
                else
                    throw new Error("Password Incorrect");
            }

            return NextResponse.json({
                message: true,
                status: 200,
            });


        }catch (err){
            return NextResponse.json({
                message: err instanceof Error ? err.message : err,
                status: 400,
            })
        }
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