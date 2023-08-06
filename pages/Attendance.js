import React, { useState, useEffect, useRef } from 'react'


const Attendance = () => {
    // const [userInput, setUserInput] = useState('');
    // // Create a ref to the hidden input element
    // const hiddenInputRef = useRef(null);


    // useEffect(() => {
    //     // Focus on the hidden input element when the page loads
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
    //     // Send a POST request to the backend to update the attendance count
    //     fetch('http://localhost:3009/api/v1/update-attendance', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             matriculation_no: userInput,
    //         }),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('Attendance count updated:', data);
    //             setUserInput(''); // Clear the input after submission
    //         })
    //         .catch((error) => {
    //             console.error('Error updating attendance count:', error);
    //         });
    // };


    const [userInput, setUserInput] = useState('');
    const hiddenInputRef = useRef(null);

    useEffect(() => {
        hiddenInputRef.current.focus();
    }, []);

    useEffect(() => {
        let timer;
        if (userInput) {
            timer = setTimeout(() => {
                handleSubmit();
            }, 10000);
        }

        return () => clearTimeout(timer);
    }, [userInput]);

    const handleInput = (event) => {
        const value = event.target.value;
        setUserInput(value);
        console.log('User input:', value);
    };

    // const handleSubmit = () => {
    //     console.log('Submitting:', userInput);
    //     // Send a POST request to the backend to fetch the course schedule
    //     fetch('http://localhost:3009/api/v1/course-schedule', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             matriculation_no: userInput,
    //         }),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('Course schedule:', data);

    //             // Check if there's a course schedule for the current date and time
    //             const now = new Date();
    //             const currentTime = now.getTime();
    //             const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    //             const course = data.find((item) => {
    //                 const startTime = new Date(item.start_time).getTime();
    //                 const endTime = new Date(item.end_time).getTime();
    //                 return currentDay === item.week_day && currentTime >= startTime && currentTime <= endTime;
    //             });

    //             if (course) {
    //                 // There's a course at the current date and time, update attendance count
    //                 const courseId = course.course_id;
    //                 console.log('Updating attendance for course ID:', courseId);

    //                 fetch('http://localhost:3009/api/v1/update-attendance', {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                     body: JSON.stringify({
    //                         matriculation_no: userInput,
    //                         course_id: courseId,
    //                     }),
    //                 })
    //                     .then((response) => response.json())
    //                     .then((data) => {
    //                         console.log('Attendance count updated:', data);
    //                         setUserInput(''); // Clear the input after submission
    //                     })
    //                     .catch((error) => {
    //                         console.error('Error updating attendance count:', error);
    //                     });
    //             } else {
    //                 console.log('No course found at the current date and time. Attendance not updated.');
    //                 setUserInput(''); // Clear the input after submission
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching course schedule:', error);
    //         });
    // };


    const handleSubmit = () => {
        console.log('Submitting:', userInput);
        // Send a POST request to the backend to fetch the course schedule
        fetch('http://localhost:3009/api/v1/course-schedules', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({
            //     matriculation_no: userInput,
            // }),
        })
            // .then((response) => response.json())
            // .then((data) => {
            //     console.log('Course schedule:', data);

            //     // Check if there's a course schedule for the current date and time
            //     const now = new Date();
            //     const currentTime = now.getTime();
            //     const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
            //     const course = data.find((item) => {
            //         const startTime = new Date(item.start_time).getTime();
            //         const endTime = new Date(item.end_time).getTime();
            //         return currentDay === item.week_day && currentTime >= startTime && currentTime <= endTime;
            //     });

            .then((response) => response.json())
            .then((data) => {
                console.log('Course schedule:', data);

                // Check if there's a course schedule for the current date and time
                const now = new Date();
                const currentTime = now.getTime();
                const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
                const course = data.courseSchedules.find((item) => { // Access courseSchedules key
                    const startTime = new Date(item.start_time).getTime();
                    const endTime = new Date(item.end_time).getTime();
                    return currentDay === item.week_day && currentTime >= startTime && currentTime <= endTime;
                });


                if (course) {
                    // There's a course at the current date and time, update attendance count
                    const courseId = course.course_id;
                    console.log('Updating attendance for course ID:', courseId);

                    // Modify the POST request to include the course_id in the request body
                    fetch('http://localhost:3009/api/v1/update-attendance', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            matriculation_no: userInput,
                            course_id: courseId, // Include the course_id here
                        }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Attendance count updated:', data);
                            setUserInput(''); // Clear the input after submission
                        })
                        .catch((error) => {
                            console.error('Error updating attendance count:', error);
                        });
                } else {
                    console.log('No course found at the current date and time. Attendance not updated.');
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

                {/* {userInput && <div>Typing: {userInput}</div>} */}



            </div>


        </div>
    )
}

export default Attendance