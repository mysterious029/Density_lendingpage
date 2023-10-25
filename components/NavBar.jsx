'use client'

import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavBar = () => {
    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                transition={{
                    delay: 0.1,
                    duration: 0.3
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='md:px-56 px-6 flex justify-between items-center w-full pt-2 mt-6'
            >
                <Image
                    src='/assets/logo.png'
                    width={55}
                    height={55}
                    alt="Logo"
                    style={{ cursor: 'pointer' }}
                />

                <div className='md:flex justify-center items-center hidden'>
                    <Link className='mr-10 font-semibold text-[#5e5e5e]' href="./">Emotions</Link>
                    <Link className='mr-10 font-semibold text-[#5e5e5e]' href="./">Manifesto</Link>
                    <Link className='mr-10 font-semibold text-[#5e5e5e]' href="./">Self-Awareness Test</Link>
                    <Link className='mr-10 font-semibold text-[#5e5e5e]' href="./">Work With Us</Link>

                </div>

                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    transition={{
                        delay: 0.15,
                        duration: 0.4
                    }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className='flex justify-center items-center bg-[#212020] duration-300 rounded-[50px] text-[#e6e4e4] px-5 py-3 font-medium cursor-pointer shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
                    Download app
                </motion.button>
            </motion.nav>
        </>
    )
}

export default NavBar