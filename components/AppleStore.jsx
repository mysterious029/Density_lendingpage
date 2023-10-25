'use client'

import Image from 'next/image'
import { motion } from 'framer-motion';


const AppleStore = () => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            transition={{
                delay: 0.8,
                duration: 0.8
            }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className='flex justify-center items-center w-40 h-16 bg-black rounded-md '>
            <Image
                src='/assets/apple.svg'
                width={35}
                height={35}
                alt="Logo"
            />
            <div className='flex flex-col flex-[0.9] text-white '>
                <p className='text-xs font-medium text-center'>Download on the</p>
                <p className='text-lg text-center font-semibold'>App Store</p>
            </div>

        </motion.div>
    )
}

export default AppleStore