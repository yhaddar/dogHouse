import { cookies } from "next/headers";

export class Cookies {

    static async store(token: string){
        const cookie = await cookies();
        cookie.set('token', token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 10 * 24 * 60 * 60
        })
    }
}