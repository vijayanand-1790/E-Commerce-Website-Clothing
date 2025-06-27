import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { LuRotateCcw } from "react-icons/lu";
import { FaClock } from "react-icons/fa6";

const Features = () => {

    const features = [
        { icon: FaTruckFast, text: "Free shipping", subtext: "On orders over $100" },
        { icon: FaLock, text: "Secure Payments", subtext: "100% protected payments" },
        { icon: LuRotateCcw, text: "Easy Returns", subtext: "30-day return policy" },
        { icon: FaClock, text: "24/7 Customer Support", subtext: "Dedicated customer service" }
    ]

    return (
        <div className='bg-gray-200 py-10'>
            <div className='max-w-7xl mx-auto'></div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-y-10 gap-5'>
                {
                    features.map((feature, index) =>
                        <div className='flex justify-center items-center gap-3' key={index}>
                            <feature.icon className='md:text-3xl text-2xl'/>
                            <div>
                                <p className='md:text-lg text-base font-bold'> {feature.text} </p>
                                <p className='md:text-base text-sm'> {feature.subtext} </p>
                            </div>

                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default Features