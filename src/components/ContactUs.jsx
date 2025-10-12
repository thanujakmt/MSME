import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';


function ContactUs() {
    return (
        <div>
            <div className={` relative`}>
                <div className=" 2xl:h-[700px]">
                    <img src='../src/assets/Bg3.png' className="w-full h-full relative z-1" />
                </div>
                <p className={"text-white md:text-3xl absolute inset-0 flex items-center justify-center z-2"}>Let's Discuss Something Cool Together</p>
            </div>
            <div className="md:px-[20px]  2xl:px-[150px] py-[20px]">
                <div className='px-10 py-3 m-5'>
                    <p className='text-orange-500 text-2xl font-bold pb-2'>Contact Details</p>
                    <div className="flex justify-between items-center">
                        <div className='flex flex-col w-1/2 mr-10'>
                            <div className="bg-white border rounded-lg shadow-md overflow-hidden mb-10">
                                <div className="p-4">
                                    <p className="text-xl font-semibold text-gray-900 pb-1">For Udyam Registration:</p>
                                    <p className="mt-2 text-gray-600 text-sm pb-2">Feel free to contact us between 8:00 am and 8:00 pm</p>
                                    <p className="text-md font-semibold text-gray-700 flex items-center pb-2"><EnvelopeIcon className="w-4 h-4 mr-3" />Udyamcareinfo@gmail.com</p>
                                    <p className="text-md font-semibold text-gray-700 flex items-center"><PhoneIcon className="w-4 h-4 mr-3" />+91 7209843655</p>
                                </div>
                            </div>
                            <div className="bg-white border rounded-lg shadow-md overflow-hidden ">
                                <div className="p-4">
                                    <p className="text-xl font-semibold text-gray-900 pb-1">For Udyog Registration:</p>
                                    <p className="mt-2 text-gray-600 text-sm pb-2">Feel free to call us between 10:00 am to 10:00 pm</p>
                                    <p className="text-md font-semibold text-gray-700 flex items-center pb-2"><EnvelopeIcon className="w-4 h-4 mr-3" />udyamcareinfo@gmail.com</p>
                                    <p className="text-md font-semibold text-gray-700 flex items-center"><PhoneIcon className="w-4 h-4 mr-3" />+91 7209843655, +91 7209843655</p>
                                </div>
                            </div>
                        </div>
                        <img src='../src/assets/ContactUs.webp' className='w-1/2 rounded-md' />
                    </div>
                </div>
                <div className='px-10 py-5 m-5'>
                    <div className='flex items-center'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=PLACEHOLDER"
                            class="w-1/2 h-[150px] border-0"
                            allowfullscreen
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        <div className='flex flex-col ml-10'>
                            <p className='text-2xl font-bold pb-3'>MSME Office - Headquarters</p>
                            <p className='text-gray-400'>Udyog Bhawan, Rafi Marg, New Delhi, India 110011</p>
                        </div>
                    </div>
                </div>
                <div className='px-10 py-5 m-5'>
                    <div className='flex items-center'>
                        <div className='flex flex-col mr-20'>
                            <p className='text-2xl font-bold pb-3'>MSME Office - Regional Office (South)</p>
                            <p className='text-gray-400'>Small Industries Bhavan, 65/1 Gandhi Nagar, Bangalore, India 560009</p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=PLACEHOLDER"
                            class="w-1/2 h-[150px] border-0"
                            allowfullscreen
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;