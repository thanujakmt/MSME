import React from 'react';

function OurServices() {
    return (
        <div class="overflow-hidden shadow-lg w-screen p-5 bg-blue">
            <span class="text-white text-2xl py-5 font-bold">Our Services</span><br/>
            <span class="text-white text-xs">MSME registration portal make your process quick and effortless with professional assistance</span><br/>
            <div class="flex py-5">
                <div class='flex flex-col items-center'>
                    <img src='../src/assets/Service1_icon.png' class="h-16 w-[65px]"/>
                    <span class="text-white text-xs px-4 pt-2">New Udyam (MSME) Registration</span>
                </div>
                <div class='flex flex-col items-center'>
                    <img src='../src/assets/Service2_icon.png' class="h-16 w-[65px]"/>
                    <span class="text-white text-xs px-4 pt-2">Correction of Certificates and Updates</span>
                </div>
                <div class='flex flex-col items-center'>
                    <img src='../src/assets/Service3_icon.png' class="h-16 w-[65px]" />
                    <span class="text-white text-xs px-4 pt-2">Easy Download MSME Certificate</span>
                </div>
                <div class='flex flex-col items-center'>
                    <img src='../src/assets/Service4_icon.png' class="h-16 w-[65px]" />
                    <span class="text-white text-xs px-4 pt-2">Udyam Re-registration Postmigration</span>
                </div>
                <div class='flex flex-col items-center'>
                    <img src='../src/assets/Service5_icon.png' class="h-16 w-[65px]"/>
                    <span class="text-white text-xs px-4 pt-2">Document and Expert Support</span>
                </div>
        </div>
        <span class="text-white text-xs">We handle the complexity, so you can focus on what you do best — running your business.</span>
        </div>
    );
}

export default OurServices;