import React from 'react'

const Timetable = ({ timetableData }) => {
    return (
        <div>
            <table className="border-collapse">
                <thead>
                    <tr>
                        <th className="border border-gray-400 p-2">Time</th>
                        <th className="border border-gray-400 p-2">Monday</th>
                        <th className="border border-gray-400 p-2">Tuesday</th>
                        <th className="border border-gray-400 p-2">Wednesday</th>
                        <th className="border border-gray-400 p-2">Thursday</th>
                        <th className="border border-gray-400 p-2">Friday</th>
                    </tr>
                </thead>
                <tbody>
                    {timetableData.map((timeSlot) => (
                        <tr key={timeSlot.time}>
                            <td className="border border-gray-400 p-2">{timeSlot.time}</td>
                            <td className="border border-gray-400 p-2 w-36">{timeSlot.monday}</td>
                            <td className="border border-gray-400 p-2">{timeSlot.tuesday}</td>
                            <td className="border border-gray-400 p-2">{timeSlot.wednesday}</td>
                            <td className="border border-gray-400 p-2">{timeSlot.thursday}</td>
                            <td className="border border-gray-400 p-2">{timeSlot.friday}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Timetable