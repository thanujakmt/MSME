import { useState } from 'react';
import Form from './RegistrationForm';

function Registration() {

    const [openIndex, setOpenIndex] = useState(null);
    const data = [
        {
            title: 'Is Udyam Registration compulsory for business owners?',
            content: "Definitely, because if you don't have registration, you cannot access government benefits and financial assistance.",
        },
        {
            title: 'How much time does it take to get a Udyam Certificate?',
            content: "The process of registration is instant, and the certificate will also be issued immediately after approval.",
        },
        {
            title: 'If I want to update my Udyam Certificate, can I do it later?',
            content: 'Yes, MSME Registration Portal is a platform that offers businesses to modify their information when needed.',
        },
        {
            title: 'How can I track the status of my Udyam Registration?',
            content: 'You can check your status on MSME Registration Portal by mentioning your unique Udyam Registration Number or your linked contact number.',
        },
        {
            title: 'Does my Udyam Registration Expire?',
            content: 'The Udyam Registration is permanent and does not need renewal (unlike the previous MSME registration process).'
        }
    ];

    return (
        <div>
            <div className={` relative`}>
                <div className=' 2xl:h-[700px]'>
                    <img src='../src/assets/urban-skyline.png' className=" relative z-1 2xl:w-full h-full" />
                </div>
                <div className={"text-white text-[8px] absolute inset-0 flex flex-col items-center justify-center z-2"}>
                    <span className=" md:text-3xl pb-4">Udyam Registration 2025</span>
                    <span className="lg:text-xl md:text-[16px]">A Udyam registration certificate is necessary to obtain loans from banks and benefits provided</span>
                    <span className="lg:text-xl md:text-[16px]"> under various schemes to MSMEs.- The Udyam registration certifies that an enterprise is</span>
                    <span className="md:text-xl "> covered under the MSME category</span><br />
                    <span className="md:text-xl">(उद्यम पंजीकरण प्रमाणपत्र: सूक्ष्म, लघु और मध्यम उद्यमों के लिए)</span><br />
                    <span className="md:text-xl">(आइए आत्मनिर्भर भारत अभियान को सफल बनाने का प्रयास करें!)</span>
                </div>
            </div>
            <div className='xl:flex xl:justify-evenly 2xl:flex 2xl:flex-row 2xl:items-start px-10 pt-10 pb-3'>
                <div className='md:w-160 '>
                    <Form />
                </div>
                <div className='flex flex-col items-start py-5 2xl:py-0 2xl:h-[1470px]'>
                    <div className=' 2xl:h-[1100px] 2xl:w-[700px]'>
                        <img src='../src/assets/Register_certificate.png' className=" h-full w-full" />
                    </div>
                    <div className=' 2xl:pt-[60px] md:w-160 w-70'>
                        <p className='text-pale_yellow text-2xl font-bold pb-2'>What is a New Udyam Registration Certificate?</p>
                        <p className='text-sm'>Have you ever imagined this - <b>running a business from where you can get priority in government tenders, easy and fast approval loans?</b> This would be amazing, right?</p><br />

                        <p className='text-sm'>So here comes Udyam Registration which provides (MSMEs) Micro, Small, and Medium Enterprises
                            in India. <b className='underline'>MSME Registration Portal</b> is a platform dedicated to business owners who are looking
                            to register under the Udyog Registration System.</p><br />

                        <p className='text-sm'>If you are a business owner, startup founder, business owner for a small business, this <b>Udyam Registration Certificate</b> can be very beneficial.</p>
                        <p className='text-sm'>Reading this blog, you will get a detailed idea about the New <span className='underline'><b>Udyam Registration Certificate</b> & What is MSME Registration Portal and Why should you register here?</span></p>
                    </div>
                </div>
            </div>
            <div className='md:px-[20px]  2xl:px-[150px] py-[20px]'>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-2'>Defining New Udyam Registration Certificate?</p>
                    <p className='text-sm'>The <b>New Udyam Registration Certificate</b> is defined as an official document which can be issued by the Government of India for <b>Micro, Small, and Medium Enterprises</b> which reflects MSME upon successful registration under <b>Udyam Registration System</b>.</p><br />

                    <p className='text-sm'>These certificates will offer proof of a business’s MSME status and can enable entrepreneurs to get several government benefits, money saving, and business growth opportunities. It is <b>permanent and does not require any renewal.</b></p><br />

                    <p className='text-sm'>With the help of this certificate, business owners can apply for government schemes, financial assistance and more specialized MSME benefits.</p><br />

                    <p className='text-sm pb-3 underline'>This Certificate includes:-</p>
                    <span className='text-sm flex items-center leading-6'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Unique Registration Number for each MSME</span>
                    <span className='text-sm flex items-center leading-6'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Business owner Details and Business Name</span>
                    <span className='text-sm flex items-center leading-6'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Enterprise Type - Micro, Small, or Medium</span>
                    <span className='text-sm flex items-center leading-6'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Aadhar and PAN card linked Verification</span>
                    <span className='text-sm flex items-center leading-6'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Registration Date</span>
                    <span className='text-sm flex items-center leading-6'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Status of Validity</span>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-2'>Featured Benefits of Udyam Registration Certificate</p>

                    <b className='text-sm flex items-center leading-6'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Financial assistance to reduce excess business costs through Government Subsidies</b>
                    <b className='text-sm flex items-center leading-6'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />High chance to get Government Tenders</b>
                    <b className='text-sm flex items-center leading-6'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Easy financial process with Collateral Free Loans and Lower Interest Rates</b>
                    <b className='text-sm flex items-center leading-6'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Brand credibility with ISO Certification</b>
                    <b className='text-sm flex items-center leading-6'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Save time with Fast Approval and Registration</b>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-3'>Let's Explore who can Apply for Udyam Registration Certificate?</p>
                    <p className='text-sm'>In case you are one of these, then register today to get the benefits.</p><br />
                    <p className='text-sm pb-3'>If you are:</p>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Individual entrepreneur who is running a small business</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Running partnership firm with two or more partners</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Private Limited Organizations</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />LLPs</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Startups</span>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-3'>Documents Required for Udyam Registration</p>
                    <p className='text-sm'>If you want to register on the MSME Registration Portal and to get New Udyam Registration Certificate, then you need these required documents:</p><br />
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Business Owner’s Aadhar Card Number</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Business PAN Card</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Name, Address, and Bank Details of Business</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />For OTP verification Contact Number linked to Aadhar Card</span>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-3'>Steps to Register on the MSME Registration Portal</p>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />First visit the official site of MSME Registration Portal</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />On the registration page you will get the option to mention Aadhar and PAN details for verification</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Then provide business information like Name, Address, and Sector</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Mobile number for OTP verification</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Now submit your application and get your Udyam Certificate</span>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-3'>Downloading and Verifying your Udyam Registration Certificate</p>
                    <span className='text-sm'>After registering your business, you can easily download and verify certificates online.</span><br />
                    <p className='text-sm pb-3'>Below are the points how:-</p>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Visit the MSME Registration Portal</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Mention your Udyam Registration Number</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Check Details of Certificate Online</span><br />
                    <p className='text-sm'>This will make sure that <b>MSME registration is valid and recognized by the government</b>.</p>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-3'>Here are some common mistakes which should be avoided during Registration</p>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Incorrect details of PAN or Aadhar Card - Can result in rejection of application</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Not Registered Contact Number - Can lead to OTP failure</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Incorrect Business Classification - Wrong MSME category placement</span>
                    <span className='text-sm flex items-center leading-7'><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" />Verification Step Missing - Delay Certificate</span><br />
                    <p className='text-sm'>In case of any help or assistance, <b className='underline'>MSME Registration Portal</b> offers <b>expert guidance</b> and <b>document support</b> for successful application.</p>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-3'>Some Frequently Asked Questions for more clarification</p>
                    <div className="md:w-200 bg-white rounded-md shadow divide-y divide-gray-200 ml-5">
                        {data.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                
                                <div className="">
                                    <div className=" my-2 py-2 shadow-xl ">
                                    <button
                                        className="w-full flex justify-between items-center px-4 py-1 text-left focus:outline-none"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                    >
                                        <span className="font-medium">{item?.title}</span>
                                        <svg className={`w-5 h-5 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    </div>
                                    {isOpen && (
                                        <div className="px-4 pb-4 text-gray-600">
                                            {item?.content}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='px-10 pt-3 pb-6'>
                    <p className='text-pale_yellow text-2xl font-bold pb-8'>Register yourself on MSME Registration Portal today!</p>
                    <p className='text-sm'>For MSMEs, the <a href='/print' target='_blank' className='font-bold underline'>Udyam Registration Certificate</a> will be beneficial which can offer <b>exclusive benefits, financial assistance, </b>and <b>business growth opportunities.</b></p><br />
                    <p className='text-sm'>This is the time, if you haven't registered yet.</p><br />
                    <p className='text-sm'>Here is your Growth Partner at Udyam registration | Udyog Aadhar Online | Msme registration!</p><br />
                    <p className='text-sm'><b>Join the group of successful businesses, register today on MSME Registration.in Portal!</b></p><br />
                    <span className='text-sm'><b>We handle the complexity, so you can concentrate on your goal and run your business.</b></span><br />
                </div>
            </div>
        </div>
    );
}

export default Registration;