import {NextRequest, NextResponse} from "next/server";
import {AuthenticationController} from "@/controller/authentication.controller";

export async function GET(){
    return NextResponse.json("dd");
}

export const  POST = async (req: NextRequest) => await AuthenticationController.login(req);