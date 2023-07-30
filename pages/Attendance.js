import React, { useState, useEffect, useRef } from 'react'


const Attendance = () => {
    const [userInput, setUserInput] = useState('');
    // Create a ref to the hidden input element
    const hiddenInputRef = useRef(null);


    useEffect(() => {
        // Focus on the hidden input element when the page loads
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

    const handleSubmit = () => {
        console.log('Submitting:', userInput);
        // Send a POST request to the backend to update the attendance count
        fetch('http://localhost:3009/api/v1/update-attendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                matriculation_no: userInput,
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