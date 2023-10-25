const WorkAboutCard = ({ heading, info }) => {
    return (
        <div className='flex flex-col p-4 md:w-96 w-44 md:h-56 bg-white rounded-xl gap-4 flex-shrink-0 md:mb-6 mr-6 hover:bg-[#fcfbff] hover:text-white duration-300 drop-shadow-xl'>
            <h2 className='text-black md:text-lg text-sm font-bold'>{heading}</h2>
            <p className='text-[#363636] md:text-sm text-xs font-semibold'>{info}</p>
        </div>
    )
}

export default WorkAboutCard