import {prisma} from "@/lib/prisma";

export class StoreRepository {
    static async store(user_id: string, token: string): Promise<void> {
        await prisma.session.create({
           data: {
               user_id: user_id,
               token: token,
               expired_at: new Date(
                   Date.now() + 10 * 24 * 60 * 60 * 1000
               ),
           }
        });
    }
}