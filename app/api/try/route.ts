import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(){
    const user = await currentUser()
    console.log("user try", user)
    return new NextResponse('get working')
}