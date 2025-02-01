import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Pitchify.png'
import { auth, signIn, signOut } from '@/auth'
const navbar = async () => {
  const session= await auth();

    return (

    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
<Link href={'/'} className='flex flex-row items-center '>
<Image src={Logo} alt={'logo'} width={120} height={50} />
</Link>
<div className='flex items-center gap-5'>
{session && session?.user ? (
    <>
    <Link href={'/startup/create'}>
    create
    </Link>
    <form action={async ()=>{
"use server"
await signOut({redirectTo:'/'});
    }}>
        <button type='submit'>Logout</button>
    </form>
   
    <Link href={`/user/${session?.user?.id}`}>
    <span>{session.user.name}</span>
    </Link>
    </>
) :(
    <>
    <form action={async()=>{
        "use server"
        await signIn("github")
    }}>
    <button type='submit'>Login</button>
    </form>
    </>
)}
</div>
      </nav>
    </header>
  )
}

export default navbar
