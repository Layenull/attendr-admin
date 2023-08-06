import React from 'react'
import Image from 'next/image'



const Cards = ({ cdImage, text, route, onClick }) => {

    return (


        <div
            className='max-w-sm rounded-3xl border-2 overflow-hidden shadow-lg flex justify-center flex-col p-50 cursor-pointer hover:scale-105 transition-transform'
            onClick={() => onClick(route)}
        >
            <Image src={cdImage} width={400} height={400} className='' alt='background image' />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{text}</div>
            </div>
        </div>
    )
}

export default Cards