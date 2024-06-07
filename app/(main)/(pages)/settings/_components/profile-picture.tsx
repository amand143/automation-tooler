'use client'
import React from "react";
import UploadCareButton from "./uploadcare-button";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
type Props = {
    userImage: string | null,
    onDelete: any,
    onUpload: any
};
const ProfilePicture = (props: Props) => {
    const router=useRouter();
    const onDelete = async () =>{
        const response = await props.onDelete();
        if(response){
            router.refresh();
        }
    }
    return (
        <div className="flex flex-col">
            <p className="text-lg text-white"> Profile Picture</p>
            <div className="flex h-[30vh] flex-col items-center justify-center">
                {props.userImage ?
                    (
                    <>
                        <div className="relative h-full w-2/12">
                        <Image
                            src={props.userImage}
                            alt="User_Image"
                            fill
                        />
                        </div>
                        <Button
                        onClick={onDelete}
                        className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
                        >
                        <X /> Remove Logo
                        </Button>
                    </>
                    ):(
                        <UploadCareButton onUpload={props.onUpload} />
                    )
                }
            </div>
        </div>
    )
}
export default ProfilePicture;