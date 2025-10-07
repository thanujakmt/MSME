import CancelRegistrationForm from './CancelRegistrationForm';

function CancelRegistrationPage() {
    return (
        <div>
            <div>
                <img src='../src/assets/Cancel_banner.png'/>
            </div>
            <div className='lg:flex lg:justify-evenly lg:items-start lg:flex-row flex flex-col items-center px-10 pt-10 pb-3'>
                <div>
                    <CancelRegistrationForm />
                </div>
                <div className='pt-0 px-5 pb-5'>
                    <img src='../src/assets/Cancel_certificate.png' className="w-160" />
                </div>
            </div>
            <div className='md:px-[20px]  2xl:px-[150px] py-[20px]'>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-2'>Cancel the Udyam certificate online. Reasons for cancelling Udyam registration</p>
                    <p className='text-sm'>Micro, Small, and Medium Enterprises play a very important role in growing and running the Indian economy in the right direction. It helps in the growth and development of the Economy as well as generating employment. For this reason, the government also pays a lot of attention to the MSME sector and to uplift them, so the government launched the Udyam Registration System. Through the Udyam Registration System, these enterprises get many benefits, such as access to government schemes easily, loans at low rates, and enhanced credibility in the market etc. However, sometimes such circumstances arise due to which MSMEs have to cancel their Udyam registration.</p><br />
                    <p>It is given here why MSMEs have to cancel their Udyam registration, and what the steps are to cancel it.</p>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-2'>Reason for cancelling Udyam registration</p>
                    <ul className="list-disc pl-8">
                        <li className='text-sm'>Closure of business: When MSMEs close their business, they must cancel their Udyam registration so that they do not have to face any legal issues in the future. Due to the cancellation of Udyam registration, if any business-related matters can also be resolved, apart from this, the Udyam registration certificate can also be prevented from misuse.</li><br />
                        <li className='text-sm'>Shifting focus: If MSME owners want to expand their business or want to change it to an industry that falls outside the MSME parameter, then they should get their registration cancelled.</li><br />
                        <li className='text-sm'>Change in structure: If there is any change in the structure of the MSME business, such as a merger, a change in ownership, or acquisitions, then first of all, MSMEs should cancel their MSME registration. However, it can be re-registered by updating the details. If the Udyam registration is cancelled due to a change in structure, it ensures that the status of MSME is in the correct organization ownership and structure.</li><br />
                        <li className='text-sm'>Coming out of MSME criteria: If the MSME business is doing well and the business comes out of the classification of MSME given by the government, then business owners should cancel their Udyam registration. By doing this, business owners will be able to maintain regulatory compliance. And another thing is that there is a separate provision to support the larger businesses.</li>
                    </ul>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-pale_yellow text-2xl font-bold pb-3'>How can you cancel Udyam registration?</p>
                    <p className='text-sm'>MSME owners can <span className='underline'>cancel Udyam registration</span> online without any hassle by following the steps given below.</p>
                    <ul className="list-disc pl-8">
                        <li className='text-sm'>First of all, go to the official Udyam registration portal.</li><br />
                        <li className='text-sm'>After opening the website, there will be an option to <span className='underline'>cancel Udyam registration</span> in the navigation bar, click there.</li><br />
                        <li className='text-sm'>The Cancel Udyam form will open on the screen, fill in whatever information is asked in the form.</li><br />
                        <li className='text-sm'>Information will be asked, such as</li>
                        <ul className="list-disc pl-8">
                            <li className='text-sm'>Name of the applicant</li><br />
                            <li className='text-sm'>Applicant's mobile number</li><br />
                            <li className='text-sm'>Applicant's email ID</li><br />
                            <li className='text-sm'>Note: The mobile number and email ID should be the same as mentioned at the time of Udyam registration</li><br />
                            <li className='text-sm'>Udyam/UAM number</li><br />
                            <li className='text-sm'>Business name</li><br />
                        </ul>
                        <li className='text-sm'>After this, select the reason from the Type of Cancellation box why you want to cancel the Udyam registration.</li><br />
                        <li className='text-sm'>After this, agree to the Terms of Service and Declaration and tick the given box.</li><br />
                        <li className='text-sm'>Finally, click on Submit Application.</li><br />
                    </ul>
                    <p className='text-sm'>After applying, if MSME owners are canceling Udyam registration by using the website of a private consultancy, then they will directly reach the payment gateway, and after paying a nominal charge, <span className='underline'>Udyam registration</span> will be canceled. They will get their information through email.</p><br />
                    <p className='text-sm'>The process of cancellation through the online medium has been mentioned above; the MSME owner can also cancel the Udyam registration through the offline medium.</p>
                </div>
                <div className='px-10 pt-3 pb-8'>
                    <p className='text-pale_yellow text-2xl font-bold pb-3'>Process of cancelling Udyam registration through the offline medium</p>
                    <p className='text-sm'>If an MSME owner wants to cancel Udyam registration offline instead of online, then they can do it by following the process given below</p><br />
                    <ul className="list-disc pl-8">
                        <li className='text-sm'>Go to the district industries center (DIC) office in your nearby area and submit a written application that you want to get your Udyam registration done. That application must be signed by the proprietor/partner/director.</li>
                        <li className='text-sm'>Attach the following documents to the application</li>
                        <ul className="list-disc pl-8">
                            <li className='text-sm'>Copy of the <span className='underline'>Udyam Registration Certificate</span></li>
                            <li className='text-sm'>Copy of the Aadhar Card and PAN Card given at the time of Udyam Registration</li>
                        </ul>
                        <li className='text-sm'>Submit the application and the documents attached to the DIC officer.</li>
                        <li className='text-sm'>After this, the DIC officer will verify your documents and forward your cancellation request.</li>
                        <li className='text-sm'>When your cancellation request is processed, you will receive a confirmation message on your given email ID or mobile number.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CancelRegistrationPage;