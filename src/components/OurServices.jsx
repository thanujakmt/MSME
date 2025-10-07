import React from 'react';

function OurServices() {
    return (
        <div className=" p-5 bg-blue border border-white">
            <div className=' lg:px-[120px]'>
                <span className="text-white text-[26px] py-5 font-bold">Our Services</span><br />
                <span className="text-white text-xs">MSME registration portal make your process quick and effortless with professional assistance</span><br />
            </div>
            <div className="md:flex md:flex-row md:justify-evenly flex flex-col py-5 lg:px-[100px] gap-[10px]">
                <div className='flex flex-col items-center justify-center '>
                    <img src='../src/assets/Service1_icon.png' className="h-16 w-[65px]" />
                    <span className="text-white text-[14px] font-bold   pt-[6px] pl-[18px]">New Udyam (MSME) Registration</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='../src/assets/Service2_icon.png' className="h-16 w-[65px]" />
                    <span className="text-white text-[14px] font-bold  pt-[6px] pl-[18px]">Correction of Certificates and Updates</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='../src/assets/Service3_icon.png' className="h-16 w-[65px]" />
                    <span className="text-white text-[14px] font-bold  pt-[6px] pl-[18px]">Easy Download MSME Certificate</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='../src/assets/Service4_icon.png' className="h-16 w-[65px]" />
                    <span className="text-white text-[14px] font-bold  pt-[6px] pl-[18px]">Udyam Re-registration Postmigration</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='../src/assets/Service5_icon.png' className="h-16 w-[65px] " />
                    <span className="text-white text-[14px] font-bold  pt-[6px] pl-[18px]">Document and Expert Support</span>
                </div>
            </div>
            <div className=' lg:px-[120px]'>
                <span className="text-white text-[14px] font-bold">We handle the complexity, so you can focus on what you do best — running your business.</span>
            </div>
        </div>
    );
}

export default OurServices;