import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';


const Attendance = () => {


    // handle with caution
    // const [userInput, setUserInput] = useState('');
    // const hiddenInputRef = useRef(null);

    // useEffect(() => {
    //     hiddenInputRef.current.focus();
    // }, []);

    // useEffect(() => {
    //     let timer;
    //     if (userInput) {
    //         timer = setTimeout(() => {
    //             handleSubmit();
    //         }, 10000);
    //     }

    //     return () => clearTimeout(timer);
    // }, [userInput]);

    // const handleInput = (event) => {
    //     const value = event.target.value;
    //     setUserInput(value);
    //     console.log('User input:', value);
    // };

    // const handleSubmit = () => {
    //     console.log('Submitting:', userInput);
    //     fetch('https://attendr-backend.onrender.com/api/v1/course-schedules', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('Course schedule:', data);

    //             if (data && data.courseSchedules && data.courseSchedules.length > 0) {
    //                 const now = new Date();
    //                 const currentTime = now.getTime();
    //                 const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

    //                 const course = data.courseSchedules.find((item) => {
    //                     const startTime = new Date(item.start_time).getTime();
    //                     const endTime = new Date(item.end_time).getTime();
    //                     return currentDay === item.week_day && currentTime >= startTime && currentTime <= endTime;
    //                 });

    //                 if (course) {
    //                     const courseId = course.course_id;
    //                     console.log('Updating attendance for course ID:', courseId);

    //                     fetch('https://attendr-backend.onrender.com/api/v1/update-attendance', {
    //                         method: 'POST',
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                         },
    //                         body: JSON.stringify({
    //                             matriculation_no: userInput,
    //                             course_id: courseId,
    //                         }),
    //                     })
    //                         .then((response) => response.json())
    //                         .then((data) => {
    //                             console.log('Attendance count updated:', data);
    //                             setUserInput(''); // Clear the input after submission
    //                         })
    //                         .catch((error) => {
    //                             console.error('Error updating attendance count:', error);
    //                         });
    //                 } else {
    //                     console.log('No course found at the current date and time. Attendance not updated.');
    //                     setUserInput(''); // Clear the input after submission
    //                 }
    //             } else {
    //                 console.log('No course schedules available.');
    //                 setUserInput(''); // Clear the input after submission
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching course schedule:', error);
    //         });
    // };
    // handle with caution

    const [userInput, setUserInput] = useState('');
    const hiddenInputRef = useRef(null);

    // States for managing images
    const [showSuccessImage, setShowSuccessImage] = useState(false);
    const [showFailedImage, setShowFailedImage] = useState(false);

    useEffect(() => {
        hiddenInputRef.current.focus();
    }, []);

    useEffect(() => {
        let timer;
        if (userInput) {
            timer = setTimeout(() => {
                handleSubmit();
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [userInput]);

    const handleInput = (event) => {
        const value = event.target.value;
        setUserInput(value);
        console.log('User input:', value);
    };

    const handleSubmit = () => {
        console.log('Submitting:', userInput);
        fetch('http://localhost:3009/api/v1/course-schedules', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Course schedule:', data);

                if (data && data.courseSchedules && data.courseSchedules.length > 0) {
                    const now = new Date();
                    const currentTime = now.getTime();
                    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

                    const course = data.courseSchedules.find((item) => {
                        const startTime = new Date(item.start_time).getTime();
                        const endTime = new Date(item.end_time).getTime();
                        return currentDay === item.week_day && currentTime >= startTime && currentTime <= endTime;
                    });

                    if (course) {
                        const courseId = course.course_id;
                        console.log('Updating attendance for course ID:', courseId);

                        fetch('http://localhost:3009/api/v1/update-attendance', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                matriculation_no: userInput,
                                course_id: courseId,
                            }),
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                console.log('Attendance count updated:', data);
                                setShowSuccessImage(true); // Show success image
                                setUserInput(''); // Clear the input after submission
                                setTimeout(() => {
                                    setShowSuccessImage(false); // Hide success image after 3 seconds
                                }, 3000);
                            })
                            .catch((error) => {
                                console.error('Error updating attendance count:', error);
                            });
                    } else {
                        console.log('No course found at the current date and time. Attendance not updated.');
                        setShowFailedImage(true); // Show failure image
                        setUserInput(''); // Clear the input after submission
                        setTimeout(() => {
                            setShowFailedImage(false); // Hide failure image after 3 seconds
                        }, 3000);
                    }
                } else {
                    console.log('No course schedules available.');
                    setUserInput(''); // Clear the input after submission
                }
            })
            .catch((error) => {
                console.error('Error fetching course schedule:', error);
            });
    };








    return (
        <div className='bg-white min-h-screen flex justify-center '>
            <div className='bg-nfc  border-4 bg-gray-50 w-9/12 h-72 bg-center bg-cover p-60 rounded-3xl relative left-20 top-20'>

                {/* Hidden input box */}
                <input
                    ref={hiddenInputRef}
                    type="text"
                    value={userInput}
                    onInput={handleInput}
                    style={{ position: 'absolute', left: '-9999px' }}
                />


                {/* Conditional rendering of image and text */}

                {/* {showSuccessImage && (
                    <div>
                        {attendanceUpdated ? (
                            <div>
                                <Image src="/success-icon.png" alt="Success Icon" width={100} height={100} />
                                <p className='text-lg font-bold'>Attendance Updated Successfully</p>
                            </div>
                        ) : (
                            <div>
                                <Image src="/failed-icon.png" alt="Failed Icon" width={100} height={100} />
                                <p className=' text-lg font-bold '>Attendance Not Updated (No ongoing class at the moment)</p>
                            </div>
                        )}
                    </div>
                )} */}

                {showSuccessImage && (
                    <div>
                        <Image src="/success-icon.png" alt="Success Icon" width={100} height={100} />
                        <p className='text-lg font-bold'>Updating Attendance record</p>
                    </div>
                )}

                {showFailedImage && (
                    <div>
                        <Image src="/failed-icon.png" alt="Failed Icon" width={100} height={100} />
                        <p className='text-lg font-bold'>Attendance Not Updated (No ongoing class at the moment)</p>
                    </div>
                )}



            </div>


        </div>
    )
}

export default Attendance