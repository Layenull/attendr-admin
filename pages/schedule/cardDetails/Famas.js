import React from 'react'
import Timetable from '@/components/Timetable'

const timetableData = [
    {
        time: '08:00 AM - 09:00 AM',
        monday: 'Subject A',
        tuesday: 'Subject B',
        wednesday: 'Subject C',
        thursday: 'Subject D',
        friday: 'Subject E',
    },

    {
        time: '09:00 AM - 10:00 AM',
        monday: 'Subject F',
        tuesday: 'Subject G',
        wednesday: 'Subject H',
        thursday: 'Subject I',
        friday: 'Subject J',
    },

    {
        time: '09:00 AM - 10:00 AM',
        monday: 'Subject F',
        tuesday: 'Subject G',
        wednesday: 'Subject H',
        thursday: 'Subject I',
        friday: 'Subject J',
    },

    {
        time: '09:00 AM - 10:00 AM',
        monday: 'Subject F',
        tuesday: 'Subject G',
        wednesday: 'Subject H',
        thursday: 'Subject I',
        friday: 'Subject J',
    },

    {
        time: '09:00 AM - 10:00 AM',
        monday: 'Subject F',
        tuesday: 'Subject G',
        wednesday: 'Subject H',
        thursday: 'Subject I',
        friday: 'Subject J',
    },

    {
        time: '09:00 AM - 10:00 AM',
        monday: 'Subject F',
        tuesday: 'Subject G',
        wednesday: 'Subject H',
        thursday: 'Subject I',
        friday: 'Subject J',
    },

    {
        time: '09:00 AM - 10:00 AM',
        monday: 'Subject F',
        tuesday: 'Subject G',
        wednesday: 'Subject H',
        thursday: 'Subject I',
        friday: 'Subject J',
    },
    // Add more time slots and subject data as needed here.
];

const Famas = () => {
    return (
        <div className='flex flex-col items-center space-y-10 justify-center'>
            <h1 className=' font-extrabold text-4xl pl-32 pt-6'>Timetable of the Faculty of Art, Management and Social Sciences</h1>
            <Timetable timetableData={timetableData} />
        </div>
    )
}

export default Famas