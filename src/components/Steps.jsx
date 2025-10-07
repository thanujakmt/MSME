import React from 'react';

function Steps() {
    return (
        <div className=" bg-blue px-[20px]  2xl:px-[150px] py-[20px]">
            <span className="text-white text-2xl py-5 font-bold">Steps to MSME Registration</span>
            <div className=' flex flex-col gap-[10px] text-[14px]'>
                <div className="flex pt-4">
                    <img src='../src/assets/Step1_icon.png' className="h-12 w-[50px]" />
                    <div className='flex pl-4 flex-col'>
                        <span className="text-white text-sm">Step 1 : Submission of Application</span>
                        <span className="text-white text-sm pt-3">Fill an online form on our MSME Registration Portal with correct business details.</span>
                    </div>
                </div>
                <div className="flex pt-5">
                    <img src='../src/assets/Step2_icon.png' className="h-12 w-[50px]" />
                    <div className='flex pl-4 flex-col'>
                        <span className="text-white text-sm">Step 2 : Verification of Document</span>
                        <span className="text-white text-sm pt-3">Through our secure upload system, submit required documents.</span>
                    </div>
                </div>
                <div className="flex pt-5">
                    <img src='../src/assets/Step3_icon.png' className="h-12 w-[50px]" />
                    <div className='flex pl-4 flex-col'>
                        <span className="text-white text-sm">Step 3 : Processing Of Payment</span>
                        <span className="text-white text-sm pt-3">Complete payment for registration through our easy and safe payment gateway.</span>
                    </div>
                </div>
                <div className="flex pt-5">
                    <img src='../src/assets/Step4_icon.png' className="h-12 w-[50px]" />
                    <div className='flex pl-4 flex-col'>
                        <span className="text-white text-sm">Step 4 : Government Filing</span>
                        <span className="text-white text-sm pt-3">File your application with government authorities.</span>
                    </div>
                </div>
                <div className="flex pt-5">
                    <img src='../src/assets/Step5_icon.png' className="h-12 w-[50px]" />
                    <div className='flex pl-4 flex-col'>
                        <span className="text-white text-sm">Step 5 : Certification</span>
                        <span className="text-white text-sm pt-3">You will receive an official MSME Certificate directly to your email within the timeline.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Steps;