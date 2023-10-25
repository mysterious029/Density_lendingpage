'use client'

import Image from 'next/image'
import { motion } from 'framer-motion';
import { SliderConstants } from '@/constants';
import SliderCard from './SliderCard';

const Slider = () => {

    const cardData = SliderConstants

    return (
        <section className=' flex flex-col items-start justify-start mt-28 font-[Montserrat] w-[90%] gap-2  '>
            <div className='flex items-center'>

                <motion.h1
                    initial={{ x: -200, scale: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 1.5,
                        type: "spring",
                        stiffness: 50

                    }}
                    whileInView={{ x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    className='md:pl-4 pl-2 flex md:text-4xl text-xl font-bold '
                >
                    Does this sound familiar...
                </motion.h1>

                <motion.div
                    initial={{ rotate: -90, x: 400, y: 20 }}
                    whileInView={{
                        rotate: 0,
                        x: 0,
                        y: 0,
                    }}
                    transition={{ duration: 1.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src='/assets/boo.svg'
                        width={100}
                        height={100}
                        alt="boo"
                        className=' rounded-full -rotate-[30deg] opacity-80 hidden md:flex'
                    />
                </motion.div>
            </div>
            <div className='flex overflow-x-scroll no-scrollbar py-8 w-full px-4'>
                {
                    cardData.map((item, index) => (
                        <SliderCard
                            emote={item.emoji}
                            bg={item.bg}
                            heading={item.heading}
                            info={item.info}
                            key={index}
                        />
                    )
                    )
                }
            </div>
        </section >
    )
}

export default Slider