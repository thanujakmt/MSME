import React from 'react';

function Footer() {
    return (
        // <div class="bg-blue 2xl:flex justify-center items-end p-6">
        //     <div class="max-w-sm pr-4">
        //         <img src="https://msmeregistration.in/static/media/navLogo.f48f282d409cc0f5873b.webp"
        //         alt="Company Logo" class="h-16 w-[170px] justify-center" />
        //         <p className='text-white text-sm pt-3'>Your trusted partner for MSME solutions. We help
        //             businesses grow with our expert services and support.</p>
        //     </div>
        //     <div class="pr-8">
        //         <p className='text-white text-xl pb-5'>Policies</p>
        //         <p className='text-white text-md pb-1'>Terms & Conditions</p>
        //         <p className='text-white text-md pb-1'>Privacy Policy</p>
        //         <p className='text-white text-md'>Cancellation Policy</p>
        //     </div>
        //     <div class="pl-8">
        //         <img src='../src/assets/Layer_2.png' class=" h-8 w- xl:h-12 "/>
        //         <a class="text-white" href='' target='_blank'>Facebook</a>
        //     </div>
        //     <div class="pl-4">
        //         <img src='../src/assets/Group 13.png' class=" h-8 xl:h-12"/>
        //         <a class="text-white" href='' target='_blank'>LinkedIn</a>
        //     </div>
        // </div>
        <div className=' md:h-[250px] h-[400px] bg-blue  gap-16 md:flex md:justify-center md:items-end md:pb-10'>
            <div className=' flex flex-col items-center pb-4 2xl:h-40'>
                <div className=' pb-6'>
                    <img className=' 2xl:h-20 h-16' src="https://msmeregistration.in/static/media/navLogo.f48f282d409cc0f5873b.webp" alt="" />
                </div>
                <div className=' text-[14px]'>
                    <p className=' text-white '>Your trusted partner for MSME solutions. We help <br /> businesses grow with our expert services and support.</p>
                </div>
            </div>
            <div className=' flex flex-col 2xl:h-36 pb-2 justify-between items-center  text-white'>
                <div>
                    <span className=' text-[24px] 2xl:text-2xl'>Policies</span>
                </div>
                <div className=' flex flex-col items-center gap-1.5'>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Cancellation Policy</span>
                </div>
            </div>
            <div className='  flex items-center justify-center gap-6 p-1 h-24 text-white'>
                <div>
                    <a href="" >
                        <img className=' h-16 py-2' src="../src/assets/Layer_2.png" alt="" />
                        <span>Facebook</span>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img className=' h-16 py-2' src="../src/assets/Group 13.png" alt="" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;