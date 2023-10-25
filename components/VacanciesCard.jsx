'use client'

import { motion } from 'framer-motion';

const VacanciesCard = ({ title, pos, location, salary }) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            transition={{
                delay: 0.4,
                duration: 0.5,
                type: "spring",
                stiffness: 50
            }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className='flex flex-[0.33] flex-col bg-[#FEFBEC] rounded-xl px-6 py-8'>
            <h1 className='text-lg font-bold text-black mb-3'>{title}</h1>
            <ul className="list-disc">
                <li className="ml-4 text-sm font-semibold text-[#535353]">{pos}</li>
                <li className="ml-4 text-sm font-semibold text-[#535353]">{location}</li>
                <li className="ml-4 text-sm font-semibold text-[#535353]">{salary}</li>
            </ul>
            <div className='flex justify-start items-center'>
                <button className='bg-black text-white font-semibold text-sm rounded-[50px] py-3 px-4 mt-6 duration-300 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>See Details</button>
            </div>
        </motion.div >
    )
}

export default VacanciesCard