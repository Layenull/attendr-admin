import React from 'react'
import Header from '@/components/Header'
import Cards from '@/components/Cards'

const Schedule = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-center space-x-14 pl-28 pt-14'>
                <Cards cdImage="./FBMAS.svg" text="Faculty of Basic Medical and Applied Sciences" />
                <Cards cdImage="./FASAS.svg" text="Faculty of Art, Management and Social Sciences " />

            </div>
        </div>
    )
}

export default Schedule