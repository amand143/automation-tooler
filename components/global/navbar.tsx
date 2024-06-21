import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import { userAgentFromString } from 'next/server'
type Props = {}
const Navbar = async (props: Props) =>{

  const user = process.env.UNIVERSAL_USER
    return <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
    <aside className="flex items-center gap-[2px]">
      <p className="text-3xl font-bold">To</p>
     
      <p className="text-3xl font-bold">oler</p>
    </aside>
    <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
      <ul className="flex items-center gap-4 list-none">
        <li>
          <Link href="#">Products</Link>
        </li>
        <li>
          <Link href="#">Pricing</Link>
        </li>
        <li>
          <Link href="#">Clients</Link>
        </li>
        <li>
          <Link href="#">Resources</Link>
        </li>
        <li>
          <Link href="#">Documentation</Link>
        </li>
        <li>
          <Link href="#">Enterprise</Link>
        </li>
      </ul>
    </nav>
    <aside className="flex items-center gap-4 hidden md:block">
        <Link
          href="/connections"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >

          <span className="border border-solid border-purple-200  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {user ? 'Dashboard' : 'Get Started'}
          </span>
        </Link>
        {user ? <UserButton afterSignOutUrl='/' />:null}
     
      </aside>

      
      <aside className="flex items-center gap-4 md:hidden">
        <Link
          href="/connections"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >


          <span className="border border-solid border-purple-200 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {user ? 'Dashboard' : 'Get Started'}
          </span>
        </Link>
        {user ? <UserButton afterSignOutUrl='/' />:null}
     
      </aside>


    </header>
}
export default Navbar;