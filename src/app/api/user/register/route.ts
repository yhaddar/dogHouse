import {NextRequest} from "next/server";
import {AuthenticationController} from "@/controller/authentication.controller";

export const POST = async (req: NextRequest)=> AuthenticationController.register(req)