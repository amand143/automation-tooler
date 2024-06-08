import ProfileForm from '@/components/forms/profile-form'
import ProfilePicture from './_components/profile-picture'
import React from 'react'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
type Props = {}

const Settings = async (props: Props) => {
  const authUser = process.env.UNIVERSAL_USER;
  if(!authUser)return null;
  const user = await db.user.findUnique({where: {clerkId: "user_2h4BM2D3dE2xBmSkxXupLxUu7v6"}});
  const onUpload = async (image: string) =>{
    'use server'
    const response = await db.user.update({
      where: {clerkId: "user_2h4BM2D3dE2xBmSkxXupLxUu7v6"},
      data: {
        profileImage: image,
      },
    });
    return response;
  }
  const onDelete = async () =>{
    'use server'
    const response = await db.user.update({
      where: {
        clerkId: "user_2h4BM2D3dE2xBmSkxXupLxUu7v6",
      },
      data: {
        profileImage: '',
      },
    })
    return response;

  }
  const updateUser = async (name: string) =>{
    'use server'
    const updatedUser = await db.user.update({
      where: {
        clerkId: "user_2h4BM2D3dE2xBmSkxXupLxUu7v6"
      },
      data: {
        name,
      },
    })
    return updatedUser;
  }
    return (
        <div className="flex flex-col gap-4">
          <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
            <span>Settings</span>
          </h1>
          <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture 
            onDelete={onDelete} 
            onUpload={onUpload} 
            userImage={user?.profileImage || ''} 
        />
        <ProfileForm user={user} onUpdate={updateUser}/>
        </div>
          </div>
          )
}

export default Settings