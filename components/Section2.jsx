'use client'

import { motion } from 'framer-motion';

const Section2 = () => {
    return (
        <section className='md:px-40 px-8 flex md:flex-row flex-col md:mt-40 mt-28 gap-8 md:gap-6 font-[Montserrat] text-center md:text-start'>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.6
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='flex flex-[0.4]  justify-center items-start gap-6 md:text-3xl text-xl font-bold text-[#212121]'>
                Be the best you
                <br />
                with EQ
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                transition={{
                    delay: 0.6,
                    duration: 0.6
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='flex flex-[0.3] justify-center items-start text-lg mx-5 font-semibold text-[#363636]'>
                Not having your own emotions under control might be holding you back. Not having.
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                transition={{
                    delay: 0.8,
                    duration: 0.6
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='flex flex-[0.3] justify-center items-start text-lg mx-5 font-semibold text-[#363636]'>
                Additionally, not understanding those of others stops you from being parent, friend you can be.
            </motion.div>
        </section>
    )
}

export default Section2