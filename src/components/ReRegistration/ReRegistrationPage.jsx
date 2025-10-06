
import ReRegistrationForm from './ReRegistrationForm';

function ReRegistrationPage() {
    return (
        <div>
            <div>
                <img src='../src/assets/Re-Register_banner.png' class="" />
            </div>
            <div class='lg:flex lg:justify-evenly lg:items-start px-10 pt-10 pb-3'>
                <div>
                    <ReRegistrationForm />
                </div>
                <div class='pt-0 px-5 pb-5'>
                    <img src='../src/assets/ReRegister_certificate.png' class="w-160" />
                </div>
            </div>
            <div className='md:px-[20px]  2xl:px-[150px] py-[20px]'>
                <div class='px-10 py-3'>
                    <p class='text-pale_yellow text-2xl font-bold pb-2'>Udyam Re-Registration Certificate: Why is it Important</p>
                    <p class='text-sm'>Micro, Small, and Medium Enterprises used to register their business in Udyog Aadhaar earlier, but in 2020, it was changed to Udyam Registration, introduced by the Ministry of Micro, Small, and Medium Enterprises, which is a very simple registration process. This process is completely online, paperless, and based on self-declaration. There is a Udyam Re Registration process within Udyam Registration, in which there is a provision for those MSMEs who have registered their business in Udyog Aadhaar to migrate to the newly launched Udyam portal. MSMEs can get many benefits by registering their business in Udyam Registration under the program run by the government.</p><br />
                </div>
                <div class='px-10 py-3'>
                    <p class='text-pale_yellow text-2xl font-bold pb-2'>Importance of Re-Registration</p>
                    <p class='text-sm pb-3'>By completing the Udyam Re-registration, MSMEs can get many benefits, due to which they can run their business in a more right direction. Here are some important</p>
                    <ul class="list-disc pl-8">
                        <li className="text-sm leading-6">A collateral-free loan is available</li>
                        <li className="text-sm leading-6">No guarantee or security is required for the loan</li>
                        <li className="text-sm leading-6">Subsidy is received at the interest rate. Apart from this, sometimes an interest subvention is also available.</li>
                        <li className="text-sm leading-6">When attending international trade fairs, MMSE is supported by the government.</li>
                        <li className="text-sm leading-6">The subsidy is received while getting the ISO certificate</li>
                        <li className="text-sm leading-6">Discount on the electricity bill</li>
                        <li className="text-sm leading-6">There is no need to deposit earnest money deposit (EMD) to get a government contract</li>
                        <li className="text-sm leading-6">Government contract processes are also simple for MSMEs, and some contracts are exclusively for Udyam-registered MSMEs.</li>
                        <li className="text-sm leading-6">Relaxation is available in paying tax, whether it is a direct tax or an indirect tax.</li>
                        <li className="text-sm leading-6">Relaxation is available while registering in the Government e-Marketplace portal.</li>
                        <li className="text-sm leading-6">A collateral-free loan is available</li>
                    </ul>
                    <p class='text-sm pt-3'>These are some advantages. The Government of India always brings new schemes for the upliftment of MSMEs, and those schemes benefit only Udyam-registered MSMEs.</p>
                </div>
                <div class='px-10 py-3'>
                    <p class='text-pale_yellow text-2xl font-bold pb-3'>Documents required for Udyam Re-registration</p>
                    <p class='text-sm pb-3'>Whenever MSMEs have to migrate from the old <span className='underline'>Udyog Aadhaar</span> to Udyam Re Registration, then MSMEs need all these documents:</p>
                    <ul class="list-disc pl-8">
                        <li className="text-sm leading-6">UAM Number: This number is mentioned in the old Udyog Aadhaar Registration Certificate</li>
                        <li className="text-sm leading-6">National Industrial Classification System Code</li>
                        <li className="text-sm leading-6">Email address and phone number, which is mentioned in the old Udyog Aadhaar Registration Certificate (this is needed to receive OTP)</li>
                    </ul>
                </div>
                <div class='px-10 pt-3 pb-8'>
                    <p class='text-pale_yellow text-2xl font-bold pb-3'>Process of Udyam Re-registration</p>
                    <p class='text-sm'>If you want to migrate from the old Udyog Aadhaar and register your business to the new <a href='/re-register' className='underline' target='_blank'>Udyam Re-Registration</a>, then you can easily register by following the steps given below.</p>
                    <ul class="list-disc pl-8">
                        <li class='text-sm leading-6'>First of all, you have to go to the Udyam Registration Portal</li>
                        <li class='text-sm leading-6'>When the website opens, there will be an option for Udyam Migration Consultancy in the navigation bar. click there</li>
                        <li class='text-sm leading-6'>The Udyam Migration Consultancy/ Re-registration form appears on the screen. All the information asked for in the form will have to be filled out correctly.</li>
                        <li class='text-sm leading-6'>The information asked in the form is</li>
                        <ul class="list-disc pl-8">
                            <li class='text-sm leading-6'>Applicant's name</li>
                            <li class='text-sm leading-6'>Mobile number</li>
                            <li class='text-sm leading-6'>Email ID</li>
                            <li class='text-sm leading-6'>Old Udyog Aadhar Memorandum number</li>
                        </ul>
                        <li class='text-sm leading-6'>After filling in all this information, select your state from the drop-down box.</li>
                        <li class='text-sm leading-6'>After that, you will have an option to provide details of any changes you want to your existing Udyog Udyam certificate.</li>
                        <ul class="list-disc pl-8">
                            <li class='text-sm leading-6'>If you want, click on the yes option and write the details in the box that you want to update on your certificate.</li>
                            <li class='text-sm leading-6'>If you do not want to make any changes, then click no and proceed further.</li>
                        </ul>
                        <li class='text-sm leading-6'>After that, agree to the Terms of Service and Declaration box and tick the mark in it.</li>
                        <li class='text-sm leading-6'>Fill in the captcha code that will be visible on your screen in the given box.</li>
                        <li class='text-sm leading-6'>Finally, click on Submit Application.</li>
                        <li class='text-sm leading-6'>After clicking on the Submit Application, you will directly reach our payment gateway, and after paying some nominal charges, your Udyam Re registration process will be completed. Its confirmation message will be provided to you on your given email ID.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ReRegistrationPage;