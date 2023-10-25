'use client'

import Image from 'next/image'
import { motion } from 'framer-motion';
import { aboutCardConstants } from '@/constants';
import WorkAboutCard from './WorkAboutCard';


const Work = () => {

    const aboutCardData = aboutCardConstants

    return (
        <section className="md:px-40 w-screen md:w-full  md:h-full px-1 flex justify-center items-center md:mt-36 mt-24 font-[Montserrat]">
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.6
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#F3F1FF] flex-col md:flex-row w-[90%] h-full md:h-[90vh] rounded-3xl flex md:px-12 px-2 md:pt-20 pt-12  md:pb-8 pb-6 md:gap-12 gap-8">
                <div className="flex flex-1 flex-col  ">
                    <motion.div
                        initial={{ x: '-200', scale: 0, opacity: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 50
                        }}
                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center md:justify-start ">
                        <h1 className="md:text-4xl text-3xl text-black font-bold ">Work with us</h1>
                    </motion.div>
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.8
                        }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col bg-white rounded-3xl gap-1 md:h-[60vh]  mt-6">
                        <div className="flex flex-[0.7] flex-col md:px-6 px-4 py-4 ">
                            <Image
                                src='/assets/boo.svg'
                                width={100}
                                height={100}
                                alt="boo"
                                className='-ml-5'
                            />
                            <h2 className='text-start text-[#363636] text-2xl font-semibold mb-2'>About</h2>
                            <p className='text-start text-[#535353] font-semibold'>At ahead our goal is to make self-improvement dun and lasting. We know there's a way how to make it work. And that's what aHead is all about!</p>
                        </div>
                        <div className="flex flex-[0.3] flex-col p-2 bg-[#FEF6F0] rounded-3xl gap-1 md:px-6 px-4 py-4">
                            <h2 className='text-start text-[#363636] text-2xl font-semibold mb-2'>Product</h2>
                            <p className='text-start text-[#535353] font-semibold mb-3'>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager-like we did... </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-1 flex-col justify-end">
                    <div className="flex items-center md:justify-end justify-center">
                        <motion.h1
                            initial={{ x: '200', scale: 0, opacity: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 50
                            }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="md:text-4xl text-3xl text-[#6B4DEE] md:text-end text-center font-bold">ahead</motion.h1>
                    </div>
                    <div className="flex md:flex-col flex-row md:overflow-y-auto overflow-x-hidden py-8 w-full px-4 mt-4">
                        {
                            aboutCardData.map((item, index) => (
                                <WorkAboutCard heading={item.heading} info={item.info} key={index} />
                            ))
                        }
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Work