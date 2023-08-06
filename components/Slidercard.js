import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const images = [
    '/FASAS.svg',
    '/FBMAS.svg',
    '/blue-nfc.jpg',

]

const Slidercard = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (

        // <div className="border-2  w-7/12 h-72 bg-center bg-cover p-60 rounded-3xl overflow-hidden relative">
        //     <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full h-full" />
        //     <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        //         <button onClick={prevImage} className=" text-blue-500 py-2 px-4 rounded-l">
        //             <FaArrowLeft />
        //         </button>
        //     </div>
        //     <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        //         <button onClick={nextImage} className=" text-blue-500 py-2 px-4 rounded-r">
        //             <FaArrowRight />
        //         </button>
        //     </div>
        // </div>

        <div className="border-2 w-7/12 h-72 bg-center bg-cover p-60 rounded-3xl overflow-hidden">
            <Image
                src={images[currentImage]}
                alt={`Image ${currentImage + 1}`}
                width={400}
                height={300}
                className="w-full h-full"
            />
            <div className="flex justify-between mt-2">
                <button onClick={prevImage} className="bg-blue-500 text-white py-2 px-4 rounded-l">
                    <FaArrowLeft />
                </button>
                <button onClick={nextImage} className="bg-blue-500 text-white py-2 px-4 rounded-r">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Slidercard