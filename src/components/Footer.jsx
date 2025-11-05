import React from 'react';

function Footer() {
    return (
        <div class="bg-blue flex justify-center items-end p-6">
            <div class="max-w-sm pr-4">
                <img src="https://msmeregistration.in/static/media/navLogo.f48f282d409cc0f5873b.webp"
                alt="Company Logo" class="h-16 w-[170px] justify-center" />
                <p className='text-white text-sm pt-3'>Your trusted partner for MSME solutions. We help
                    businesses grow with our expert services and support.</p>
            </div>
            <div class="pr-8">
                <p className='text-white text-xl pb-5'>Policies</p>
                <p className='text-white text-md pb-1'>Terms & Conditions</p>
                <p className='text-white text-md pb-1'>Privacy Policy</p>
                <p className='text-white text-md'>Cancellation Policy</p>
            </div>
            <div class="pl-8">
                <img src='../src/assets/Facebook.png' class="h-12 w-[50px]"/>
                <a class="text-white" href='' target='_blank'>Facebook</a>
            </div>
            <div class="pl-4">
                <img src='../src/assets/Linkedin.png' class="h-12 w-[50px]"/>
                <a class="text-white" href='' target='_blank'>LinkedIn</a>
            </div>
        </div>
    );
}

export default Footer;