"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Dot } from 'lucide-react';



function Navbar() {

    const pathName = usePathname()
    console.log(pathName)

    return (
        <nav className='text-md w-full h-[10vh] flex justify-evenly items-center z-10 absolute'>
            <div className='w-full h-full flex justify-center items-center'>
                <Link href="/works" className='flex justify-center items-center gap-0.2'>
                    {pathName == "/works" ? (
                        <Dot strokeWidth={3} />
                    ) : (
                        ""
                    )}
                    WORKS
                </Link>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <Link href="/skills" className='flex justify-center items-center gap-0.2'>
                    {pathName == "/skills" ? (
                        <Dot strokeWidth={3} />
                    ) : (
                        ""
                    )}
                    SKILLS
                </Link>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <Link href="/" className='text-xl font-bold'>
                    {"<//>"}
                </Link>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <Link href="/about" className='flex justify-center items-center gap-0.2'>
                    {pathName == "/about" ? (
                        <Dot strokeWidth={3} />
                    ) : (
                        ""
                    )}
                    ABOUT
                </Link>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <Link href="/talk" className='flex justify-center items-center gap-0.2'>
                    {pathName == "/talk" ? (
                        <Dot strokeWidth={3} />
                    ) : (
                        ""
                    )}
                    TALK
                </Link>
            </div>

        </nav>
    )
}

export default Navbar