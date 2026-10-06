import {prisma} from "@/lib/prisma";

export class UserRepository {

    static async userByUserName(userName: string): Promise<boolean> {
        const userByName = await prisma.user.findUnique({
            where: {
                username: userName
            }
        })
        return userByName != null;
    }

    static async userByEmail(email: string): Promise<boolean> {
        const userByEmail = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        return userByEmail != null;
    }

    static async userByPhone(phone: string): Promise<boolean> {
        const userByPhone = await prisma.user.findUnique({
            where: {
                phone: phone
            }
        });

        return userByPhone != null;
    }

}