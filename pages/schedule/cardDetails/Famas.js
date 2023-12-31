import React from 'react'
import Timetable from '@/components/Timetable'

const timetableData = [
    {
        time: '08:00 AM - 09:00 AM',
        monday: '(CSC 421) (BIO 234) (CHM 425) (PSY 234) (GST 334) (GST 456)',
        tuesday: '(CSC 421) (BIO 234) (CHM 425) (PSY 234) (GST 334) ',
        wednesday: '(CSC 421) (BIO 234) ',
        thursday: '(CSC 421) (BIO 234) (CHM 425) (PSY 234) (GST 334) (GST 456)',
        friday: '(CSC 421) (BIO 234) (CHM 425) (PSY 234) ',
    },

    {
        time: '09:00 AM - 10:00 AM',
        monday: '(CHM 425) (PSY 234) (GST 334) (GST 456)',
        tuesday: '(CSC 421) (BIO 234) (CHM 425) (GST 334) (GST 456)',
        wednesday: '(CSC 421)  (CHM 425) (PSY 234) (GST 334) (GST 456)',
        thursday: '(CSC 421) (BIO 234) (CHM 425)  (GST 456)',
        friday: '(CSC 421) (BIO 234) ) (GST 334) (GST 456)',
    },

    {
        time: '10:00 AM - 12:00 PM',
        monday: '(CSC 421) (BIO 234) (CHM 425) (PSY 234) (GST 334) (GST 456)',
        tuesday: '(CSC 421) (GST 456)',
        wednesday: '(CSC 421)  (CHM 425) (PSY 234) (GST 334) (GST 456)',
        thursday: '(CSC 421) (BIO 234) (CHM 425) (PSY 234) (GST 334) (GST 456)',
        friday: '(CSC 421) (GST 334) (GST 456)',
    },

    {
        time: '12:00 PM - 01:00 PM',
        monday: 'B',
        tuesday: 'R',
        wednesday: 'E',
        thursday: 'A',
        friday: 'K',
    },

    {
        time: '01:00 PM - 3:00 PM',
        monday: ' (PSY 234) (GST 334) (GST 456)',
        tuesday: '(CSC 421) (BIO 234) (CHM 425) (PSY 234) (GST 334) (GST 456)',
        wednesday: '(CHM 425) (PSY 234) (GST 334) (GST 456)',
        thursday: '(CSC 421) (BIO 234) (CHM 425) (PSY 234) (GST 334) (GST 456)',
        friday: '(CSC 421)  (PSY 234) (GST 334) (GST 456)',
    },

    {
        time: '03:00 PM - 4:00 AM',
        monday: '(CSC 421)  (PSY 234) (GST 334) (GST 456)',
        tuesday: '(CSC 421) (BIO 234) (CHM 425) (PSY 234) (GST 334) (GST 456)',
        wednesday: '(CSC 421) (BIO 234) (CHM 425) (PSY 234) (GST 334) (GST 456)',
        thursday: '(CSC 421)  (PSY 234) (GST 334) (GST 456)',
        friday: '(CSC 421) (BIO 234) (CHM 425) ',
    },

    {
        time: '04:00 AM - 05:00 AM',
        monday: '(CSC 421) (BIO 234) (CHM 425)  (GST 334) (GST 456)',
        tuesday: '(CSC 421)  (CSC 234) (EDS 334) (GST 456)',
        wednesday: '(CSC 421) (BIO 234) (CHM 425) (PSY 234) (EDS 334) (FBM 456)',
        thursday: '(CSC 421) (BIO 234) (CHM 425) (CSC 234) ',
        friday: '',
    },
    // Add more time slots and subject data as needed here.
];

const Famas = () => {
    return (
        <div className='flex flex-col items-center space-y-10 justify-center'>
            <h1 className=' font-extrabold text-4xl pl-32 pt-6'>Timetable of the Faculty of Art, Management and Social Sciences</h1>
            <div className=' relative left-72'>
                <Timetable timetableData={timetableData} />

            </div>
        </div>
    )
}

export default Famas