import React from 'react'
import Header from '@/components/Header'
import StudentCard from '@/components/StudentCard'

const Students = () => {
    return (
        <div>
            <Header />

            <div className=' pl-44 pt-8'>
                <StudentCard />

            </div>

        </div>
    )
}

export default Students