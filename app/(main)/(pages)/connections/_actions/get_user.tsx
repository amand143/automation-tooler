"use server";

import { db } from "@/lib/db";

export const getUserData = async() =>{
    const response = await db.user.findUnique({
        where: {
            clerkId: 'user_2h4BM2D3dE2xBmSkxXupLxUu7v6',
        },
        include: {
            connections: true,
        },
    });
    return response;
}