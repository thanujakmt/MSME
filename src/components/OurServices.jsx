import React from 'react';

function OurServices() {
    return (
        <div class=" p-5 bg-blue border border-white">
            <div className=' lg:px-[120px]'>
                <span class="text-white text-[26px] py-5 font-bold">Our Services</span><br />
                <span class="text-white text-xs">MSME registration portal make your process quick and effortless with professional assistance</span><br />
            </div>
            <div class="md:flex md:flex-row md:justify-evenly flex flex-col py-5 lg:px-[100px] gap-[10px]">
                <div class='flex flex-col items-center justify-center '>
                    <img src='../src/assets/Group 3.png' class="h-16 w-[65px]" />
                    <span class="text-white text-[14px] font-bold   pt-[6px] pl-[18px]">New Udyam (MSME) Registration</span>
                </div>
                <div class='flex flex-col items-center'>
                    <img src='../src/assets/Group 2.png' class="h-16 w-[65px]" />
                    <span class="text-white text-[14px] font-bold  pt-[6px] pl-[18px]">Correction of Certificates and Updates</span>
                </div>
                <div class='flex flex-col items-center'>
                    <img src='../src/assets/Group 1.png' class="h-16 w-[65px]" />
                    <span class="text-white text-[14px] font-bold  pt-[6px] pl-[18px]">Easy Download MSME Certificate</span>
                </div>
                <div class='flex flex-col items-center'>
                    <img src='../src/assets/Group 4.png' class="h-16 w-[65px]" />
                    <span class="text-white text-[14px] font-bold  pt-[6px] pl-[18px]">Udyam Re-registration Postmigration</span>
                </div>
                <div class='flex flex-col items-center'>
                    <img src='../src/assets/Group 5.png' class="h-16 w-[65px] " />
                    <span class="text-white text-[14px] font-bold  pt-[6px] pl-[18px]">Document and Expert Support</span>
                </div>
            </div>
            <div className=' lg:px-[120px]'>
                <span class="text-white text-[14px] font-bold">We handle the complexity, so you can focus on what you do best — running your business.</span>
            </div>
        </div>
    );
}

export default OurServices;