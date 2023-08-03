import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Cards from '@/components/Cards'

const Schedule = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const router = useRouter();

    const handleCardClick = (route) => {
        setSelectedCard(route);
        router.push(`/schedule/cardDetails/${route}`); // Navigate to the corresponding card details page
    }
    return (
        <div>
            <Header />

            <div className='flex justify-center space-x-14 pl-28 pt-14'>
                <Cards
                    cdImage='./FBMAS.svg'
                    text='Faculty of Basic Medical and Applied Sciences'
                    onClick={() => handleCardClick('Fbmas')}
                />
                <Cards
                    cdImage='./FASAS.svg'
                    text='Faculty of Art, Management and Social Sciences '
                    onClick={() => handleCardClick('Famas')}
                />
            </div>

        </div>
    )
}

export default Schedule