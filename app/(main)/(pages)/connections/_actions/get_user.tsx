"use server";

import { db } from "@/lib/db";

export const getUserData = async(id:string) =>{
    const response = await db.user.findUnique({
        where: {
            clerkId: id,
        },
        include: {
            connections: true,
        },
    });
    return response;
}