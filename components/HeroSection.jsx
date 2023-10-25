'use client'

import Image from 'next/image'
import { motion } from 'framer-motion';
import AppleStore from './AppleStore';



const HeroSection = () => {
    return (
        <section className="md:px-40 px-4 flex justify-center items-center mt-10 font-[Montserrat] ">
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#ECE8FB] w-[95%] md:h-[80vh] rounded-3xl flex flex-col md:flex-row p-6 gap-8 md:gap-0 ">

                <div className="flex flex-col justify-center items-start flex-1 px-5 py-2">
                    <motion.p
                        initial={{ x: -20, opacity: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8
                        }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xl text-[#323232] font-semibold ml-1"
                    >
                        Ahead app
                    </motion.p>

                    <motion.h1
                        initial={{ x: -20, opacity: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8
                        }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }} className="md:text-6xl text-3xl font-bold text-[#151515] mt-3"
                    >
                        Master your life by mastering emotions
                    </motion.h1>

                    <div className='flex items-center mt-10'>
                        <AppleStore />
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            transition={{
                                delay: 0.8,
                                duration: 0.8
                            }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className='flex flex-col justify-center items-start md:w-40 w-28 h-12 rounded-md ml-5 gap-1'>
                            <div
                                className="flex justify-start">
                                <Image
                                    src='/assets/star.png'
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <Image
                                    src='/assets/star.png'
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <Image
                                    src='/assets/star.png'
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <Image
                                    src='/assets/star.png'
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <Image
                                    src='/assets/star.png'
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                            </div>
                            <p className='text-xs font-semibold text-black'>100+ App Store Reviews </p>
                        </motion.div>
                    </div>
                </div>


                <div className='flex flex-1 justify-center items-center relative px-4 py-2'>
                    <div className='absolute hidden md:flex  h-[450px] w-[450px] rounded-full  border-4 border-dashed  border-[#f6f6fd]  justify-center items-center z-0 '>
                        <div className='absolute h-72 w-72  rounded-full bg-[#DED6F8] '>
                        </div>
                    </div>
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: 'linear',
                        }}
                        className='z-10 absolute top-0'>
                        <Image
                            src='/assets/planet.png'
                            width={75}
                            height={75}
                            alt="planet"
                        />

                    </motion.div>
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: 'linear',
                        }}
                        className='z-10 absolute left-0 -rotate-45'>
                        <Image
                            src='/assets/planet.png'
                            width={75}
                            height={75}
                            alt="planet"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: 'linear',
                        }}
                        className='z-10 absolute bottom-0 rotate-45'>
                        <Image
                            src='/assets/planet.png'
                            width={75}
                            height={75}
                            alt="planet"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: 'linear',
                        }}
                        className='z-10 absolute right-0 -rotate-45'>
                        <Image
                            src='/assets/planet.png'
                            width={75}
                            height={75}
                            alt="planet"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.8
                        }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className='flex justify-center items-center z-10 '>
                        <Image
                            src='/assets/mobile.png'
                            width={300}
                            height={300}
                            alt="mobile"
                            className='md:scale-100 scale-75'
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection