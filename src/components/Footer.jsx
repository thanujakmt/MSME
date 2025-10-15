import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
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
                <div className=' flex flex-col items-center gap-1.5 pt-3'>
                    <span onClick={() => navigate('/terms-conditions')}>Terms & Conditions</span>
                    <span onClick={() => navigate('/privacy-policy')}>Privacy Policy</span>
                    <span onClick={() => navigate('/cancellation-policy')}>Cancellation Policy</span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-6 p-1 h-24 text-white'>
                <div>
                    <a href="" >
                        <img className=' h-16 py-2' src="../src/assets/Facebook.png" alt="" />
                        <span>Facebook</span>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img className=' h-16 py-2' src="../src/assets/Linkedin.png" alt="" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;