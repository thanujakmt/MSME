import PrintCertificateForm from "./PrintCertificateForm";

function PrintCertificatePage() {
    return (
        <>
            <div className="relative">
                <img src='../src/assets/Print_Banner.jpeg' className="w-full relative z-1" />
                <p className={"text-white 2xl:text-3xl absolute inset-0 flex items-center justify-center z-2"}>PRINT UDYAM CERTIFICATE</p>
            </div>
            <div className='lg:flex lg:flex-row lg:justify-evenly lg:items-start flex flex-col items-center px-12 pt-10 pb-3'>
                <div className="2xl:w-160 md:w-160 ">
                    <PrintCertificateForm />
                </div>
                <div className='pt-0 px-5 pb-5 2xl:w-160 md:w-150 w-90'>
                    <img src='../src/assets/Print_certificate.png' className="" />
                </div>
            </div>
            <div className="md:px-[20px]  2xl:px-[150px] py-[20px]">
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-2'>Process of Print Udyam Certificate online</p>
                    <p className='text-sm'>When the Udyam registration is completed successfully, the Udyam Registration Certificate is received on the registered email. If the MSME owner wants, he can also download and print the certificate because this certificate works as a digital identity card for the MSME. Due to this, many benefits given by the government are available, and if any financial assistance is needed, it can be obtained from the banks. Here, step-by-step, the process is explained on how MSME owners download and print the Udyam registration certificate</p>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-4'>Steps to download and print the Udyam registration certificate</p>
                    <p className='text-sm '>To download or <span className="underline">print the registration certificate</span>, follow the steps below and download it easily.</p><br />
                    <ul className="list-disc pl-8">
                        <li className='text-sm'>First of all, go to the official Udyam registration portal</li>
                        <li className='text-sm'>Click on Print Udyam Certificate in the navigation bar</li>
                        <li className='text-sm'>The print Udyam certificate form will open, and fill in all the information asked for in it</li>
                        <li className='text-sm'>Like the applicant's name</li>
                        <li className='text-sm'>Udyam registration number</li>
                        <li className='text-sm'>Mobile number</li>
                        <li className='text-sm'>Email ID</li>
                        <li className='text-sm'>Select your state from the given drop-down box</li>
                        <li className='text-sm'>Then, to verify, enter the captcha code in the given box</li>
                        <li className='text-sm'>Tick both boxes of Terms of Service and Declaration</li>
                        <li className='text-sm'>Finally, click on Submit Application</li>
                        <li className='text-sm'>After this,Udyam registration certificate will be downloaded in Pdf form. MSME owners can print it by going to any nearby cyber cafe.</li>
                    </ul>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-3'>What documents are required for printing the Udyam registration certificate?</p>
                    <p className='flex flex-col text-sm'><b>1. Udyam Registration Number</b><span className='pl-4 text-sm'>This is a unique 16-digit number assigned to your business upon Udyam registration.</span></p><br />
                    <p className='flex flex-col text-sm'><b>2. Aadhaar Number</b><span className='pl-4 text-sm'>Your Aadhaar number is required for verification purposes.</span></p><br />
                    <p className='flex flex-col text-sm'><b>3. Mobile Number</b><span className='pl-4 text-sm'>The mobile number linked to your Udyam registration will be used for OTP verification.</span></p><br />
                    <p className='flex flex-col text-sm'><b>4. Email ID</b><span className='pl-4 text-sm'>You may also need the email ID registered with Udyam registration to receive the certificate</span></p>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-3'>Benefits of printing Udyam registration certificate</p>
                    <p className='flex flex-col text-sm'><span className="flex items-center"><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" /><b>Proof of Registration:</b></span><span className='text-sm pl-5'>A printed certificate serves as concrete evidence of Udyam registration, allowing you to easily demonstrate your status as a Micro, Small, or Medium Enterprise (MSME) to banks, government agencies, or other stakeholders.</span></p><br />
                    <p className='flex flex-col text-sm'><span className="flex items-center"><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" /><b>Easy Access:</b></span><span className='text-sm pl-5'>Having a printed certificate on hand ensures you have a readily available reference point for your registration details, making it simpler to access benefits like government schemes or subsidies.</span></p><br />
                    <p className='flex flex-col text-sm'><span className="flex items-center"><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" /><b>Presentation:</b></span><span className='text-sm pl-5'>A printed certificate can be used as a formal document when interacting with government agencies or applying for programs requiring proof of MSME status.</span></p><br />
                    <p className='flex flex-col text-sm'><span className="flex items-center"><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" /><b>Streamlined Applications:</b></span><span className='text-sm pl-5'>When applying for government schemes or loans, having the printed certificate readily available can expedite the application process and ensure accuracy in submitting required documentation.</span></p><br />
                    <p className='flex flex-col text-sm'><span className="flex items-center"><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" /><b>Record Keeping:</b></span><span className='text-sm pl-5'>A printed certificate provides a physical record of your Udyam registration, helping you to keep track of your MSME status and any related benefits.</span></p><br />
                    <p className='flex flex-col text-sm'><span className="flex items-center"><img src="../src/assets\RightAngleIcon.png" className="h-3 w-[14px] mr-2" /><b>Increased Credibility:</b></span><span className='text-sm pl-5'>The printed certificate enhances your business's credibility and legitimacy, which can be particularly helpful when seeking loans, partnerships, or other business opportunities.</span></p><br />
                </div>
                <div className='px-10 pt-3 pb-8'>
                    <p className='text-pale_yellow text-2xl font-bold pb-4'>Benefits of printing Udyam registration certificate</p>
                    <ul className="list-disc pl-8">
                        <li className='text-sm'>We provide a legally valid print of your <span className='underline'>Udyam Registration</span> certificate, ensuring it's suitable for various purposes.</li><br />
                        <li className='text-sm'>A printed certificate can be essential for various applications, including bank loans and government tenders.</li><br />
                        <li className='text-sm'>The Udyam certificate unlocks access to a wide range of government schemes and financial benefits for MSMEs, including lower interest rates on loans, Mat credit extension, and various subsidies.</li><br />
                        <li className='text-sm'>We offer a streamlined process for obtaining a printed Udyam certificate, making it easy to get the documentation you need.</li><br />
                        <li className='text-sm'>We are a trusted provider of MSME registration consultancy and related services, ensuring a smooth and reliable process.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PrintCertificatePage;