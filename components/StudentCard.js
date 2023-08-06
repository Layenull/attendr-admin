import React from 'react'
import Attendancecard from './Attendancecard'

const StudentCard = ({ studentName, level }) => {
    return (
        <div className='flex items-center rounded-xl border-2 bg-gray-50 p-2 w-11/12 space-x-5 '>
            <div>
                <h1>Ayodeji james</h1>
                <h1>200 level</h1>
            </div>



            <div>
                <Attendancecard />

            </div>



        </div>
    )
}

export default StudentCard