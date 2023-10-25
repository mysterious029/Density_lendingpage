'use client'

import '../app/globals.css'
import Image from 'next/image'
import { motion } from 'framer-motion';

const MVP = () => {
    return (
        <section className='md:px-4 flex md:mt-40 mt-28 font-[Montserrat]'>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.6
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#EDF8FE] md:w-full w-[88vw] h-full  rounded-3xl flex flex-col md:p-16 py-8 px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.6
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center items-center">
                    <p className='font-semibold text-sm  text-[#53553]'>Let your friends, family, and co-workers rate your skills.</p>
                    <h1 className='font-bold md:text-3xl text-xl text-black mt-3'>Ever Wondered what others think of you?</h1>

                </motion.div>
                <div className="flex justify-center items-center">

                    <ul className="timeline mt-12 md:ml-40 ml-1" id="timeline">
                        <li className="li">
                            <motion.div
                                initial={{ scale: 0 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.8,
                                    type: 'spring'
                                }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="timestamp ">
                                <Image src='/assets/sun.png' width={50} height={50} className='-mb-6' />

                            </motion.div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.3,
                                    type: 'spring'
                                }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="status">
                                <h4 className='text-sm font-medium'> Answer question on your social skills</h4>
                            </motion.div>
                        </li>
                        <li className="li ">
                            <motion.div
                                initial={{ scale: 0 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.8,
                                    type: 'spring'
                                }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="timestamp">

                                <Image src='/assets/sun.png' width={50} height={50} className='-mb-6' />
                            </motion.div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.3,
                                    type: 'spring'
                                }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="status">
                                <h4 className='text-sm font-medium'>Let others anonymously answer the same questions about you</h4>
                            </motion.div>
                        </li>
                        <li className="li">
                            <motion.div
                                initial={{ scale: 0 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.8,
                                    type: 'spring'
                                }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="timestamp" id="last">

                                <Image src='/assets/sun.png' width={50} height={50} className='-mb-6' />

                            </motion.div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.3,
                                    type: 'spring'
                                }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="status">
                                <h4 className='text-sm font-medium'>Find out where you and others see things the same way-and where not!</h4>
                            </motion.div>
                        </li>

                    </ul>

                </div>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 100
                    }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className='flex justify-center items-center mt-4 '>
                    <Image src='/assets/path_alt.png' width={1000} height={1000} className='p-2 scale-75 md:scale-100 ' />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default MVP