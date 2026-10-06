import {Login} from "@/model/User";
import {NextRequest, NextResponse} from "next/server";

export class AuthenticationController {
    static async login(req: NextRequest){

        const user: Login = await req.json();

        return NextResponse.json(user);
    }
}