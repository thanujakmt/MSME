import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import States_Districts from '../../States_Districts.json';

function Form() {
    const [stateVal, setStateVal] = useState("");
    const {
        register: registrationRegister,
        handleSubmit: registrationHandleSubmit,
        formState: { errors: registrationErrors }
    } = useForm();
    console.log("fbhfw", registrationErrors);

    const onSubmit = (data) => {
        console.log("rfggfrewerfgb", data);
    }

    const districts = (data) => {
        return data?.map((dist) => (
            <option value={dist} key={dist}>
                {dist}
            </option>
        ));
    };

    return (
        <div className='flex flex-col'>
            <span className="bg-blue p-6 text-white">Udyam Registration 2025 - Application Form / उद्यम जीकरण के लिए आवेदन करे</span>
            <form className=" bg-gray border border-gray-300 p-5" onSubmit={registrationHandleSubmit(onSubmit)}>
                <div className="my-3 mt-4 md:flex justify-evenly ">
                    <div>
                        <label htmlFor="name" className="block  text-sm font-medium text-black">1. Name of Owner*</label>
                        <input type="text" id="name" className="border border-gray-300 text-black
                                        text-sm rounded-lg block w-65 p-2"
                            {...registrationRegister('name', { required: "Applicant's name is required" })}
                            placeholder="Applicant Name" />
                        {registrationErrors?.name && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.name?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's name as mentioned on the PAN CARD</span>
                    </div>
                    <div>
                        <label htmlFor="number" className="block text-sm font-medium text-black">2. Mobile Number*</label>
                        <input type="number" id="number" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            {...registrationRegister('number', {
                                minLength: {
                                    value: 10,
                                    message: "Applicant's mobile number must be 10"
                                }, maxLength: {
                                    value: 10,
                                    message: "Applicant's mobile number cannot exceed 10 characters",
                                }, required: "Applicant's mobile number is required"
                            })}
                            placeholder="Mobile Number" />
                        {registrationErrors?.number && (
                            <p className="text-red-500 text-sm mt-1 w-60">{registrationErrors?.number?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's 10-digit mobile number without adding +91.</span>
                    </div>
                </div>
                <div className="my-3 md:flex justify-evenly">
                    <div>
                        <label htmlFor="email" className="block my-1 text-sm font-medium text-black">3. E-Mail ID*</label>
                        <input type="email" id="email" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2" {...registrationRegister('email', { required: "Applicant's email id is required" })}
                            placeholder="Email ID" />
                        {registrationErrors?.email && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.email?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Email Id. Udyam Registration Certificate will be shared on that Email.</span>
                    </div>
                    <div>
                        <label htmlFor="category" className="block my-1 text-sm font-medium text-black">4. Social Category*</label>
                         <select id="category" className="border border-gray-300 text-black text-sm rounded-lg p-2 w-65" {...registrationRegister('category', { required: "Social category is required" })}>
                            <option value="">Select Social Category</option>
                            <option>General</option>
                            <option>OBC</option>
                            <option>SC</option>
                            <option>ST</option>
                        </select>
                        {registrationErrors?.category && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.category?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Select the social category of the applicant.</span>
                    </div>
                </div>
                <div className="my-3 md:flex justify-evenly">
                    <div>
                        <label htmlFor="address" className="block my-1 text-sm font-medium text-black">5. Office Address*</label>
                        <input type="text" id="address" className="border border-gray-300 text-black
                    text-sm rounded-lg block w-65 p-2" {...registrationRegister('address', { required: "Applicant's office address is required" })}
                            placeholder="Office Address" />
                        {registrationErrors?.address && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.address?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Office Address Enter the applicant's plant address.</span>
                    </div>
                    <div>
                        <label htmlFor="pinCode" className="block my-1 text-sm font-medium text-black">6. Pin COde*</label>
                        <input type="text" id="pinCode" className="border border-gray-300 text-black
                    text-sm rounded-lg block w-65 p-2" {...registrationRegister('pinCode', { required: "Office pin code is required" })}
                            placeholder="Pin Code" />
                        {registrationErrors?.pinCode && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.pinCode?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Office Pin Code</span>
                    </div>
                </div>
                <div className="my-3 md:flex justify-evenly">
                    <div>
                        <label htmlFor="state" className="block my-1 text-sm font-medium text-black">7. State*</label>
                        <select id="state" className="border border-gray-300 text-black text-sm rounded-lg p-2 w-65"
                            {...registrationRegister("state", {
                                required: "Applicant's state is required",
                                onChange: (e) => {
                                    const selectedState = e.target.value;
                                    setStateVal(selectedState);
                                }
                            })}>
                            <option value="">Select State</option>
                            {States_Districts?.map((item) => {
                                return (
                                    <option value={item?.state} key={item?.state}>{item?.state}</option>
                                )
                            })}
                        </select>
                        {registrationErrors?.state && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.state?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Select the applicant's Office State</span>
                    </div>
                    <div>
                        <label htmlFor="district" className="block my-1 text-sm font-medium text-black">8. District*</label>
                        <select
                            id="district"
                            className="border border-gray-300 text-black text-sm rounded-lg p-2 w-65"
                            {...registrationRegister('district', { required: "Applicant's district is required" })}
                        >
                            <option value="">Select District</option>
                            {districts(
                                States_Districts?.find((item) => item?.state === stateVal)?.districts
                            )}
                        </select>
                        {registrationErrors?.district && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.district?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Select the applicant's Office District</span>
                    </div>
                </div>
                <div className="my-3 md:flex justify-evenly">
                    <div>
                        <label htmlFor="organisation" className="block my-1 text-sm font-medium text-black">9. Type of Organisation*</label>
                        <select id="organisation" className="border border-gray-300 text-black text-sm rounded-lg p-2 w-65" {...registrationRegister('organisation', { required: "Type of organisation is required" })}>
                            <option value="">Type of Organisation</option>
                            <option>Proprietorship</option>
                            <option>Hindu Undivided Family</option>
                            <option>Limited Liability Partnership</option>
                            <option>Private Limited</option>
                            <option>Public Limited</option>
                            <option>One Person Company</option>
                            <option>Self Help Group</option>
                            <option>Government Department</option>
                            <option>Society</option>
                            <option>Trust</option>
                            <option>Other</option>
                        </select>
                        {registrationErrors?.organisation && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.organisation?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Select the type of organization or business the applicant owns.</span>
                    </div>
                    <div>
                        <label htmlFor="businessName" className="block my-1 text-sm font-medium text-black">5. Business Name*</label>
                        <input type="text" id="businessName" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            placeholder="Business Name" {...registrationRegister('businessName', { required: "Applicant's business name is required" })} />
                        {registrationErrors?.businessName && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.businessName?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Business Name</span>
                    </div>
                </div>
                <div className="my-3 md:flex justify-evenly">
                    <div>
                        <label htmlFor="dateOfCommencement" className="block my-1 text-sm font-medium text-black">11. Date of Commencement of Business*</label>
                        <input type="text" id="dateOfCommencement" className="border border-gray-300 text-black
                    text-sm rounded-lg block w-65 p-2" {...registrationRegister('dateOfCommencement', { required: "Date of commencement is required" })}
                            placeholder="Date of Commencement of Business" />
                        {registrationErrors?.dateOfCommencement && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.dateOfCommencement?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the date when the business started.</span>
                    </div>
                    <div>
                        <label htmlFor="activity" className="block my-1 text-sm font-medium text-black">12. Main Business Activity*</label>
                        <select id="activity" className="border border-gray-300 text-black text-sm rounded-lg p-2 w-65" {...registrationRegister('activity', { required: "Business activity is required" })}>
                            <option value="">Select Business Activity</option>
                            <option>Manufacturer</option>
                            <option>Service Provider</option>
                            <option>Traders</option>
                        </select>
                        {registrationErrors?.activity && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.activity?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Select the main business activity of the applicant's enterprise.</span>
                    </div>
                </div>
                <div className="my-3">
                    <label htmlFor="additionalDetails" className="block my-1 text-sm font-medium text-black">13. Additional Details About Business*</label>
                    <textarea rows={3} type="text" id="additionalDetails" className="border border-gray-300 text-black
                    text-sm rounded-lg block w-full p-2"
                        placeholder="Additional Details About Business" {...registrationRegister('additionalDetails', { required: "Additional details is required" })} />
                    {registrationErrors?.additionalDetails && (
                        <p className="text-red-500 text-sm mt-1">{registrationErrors?.additionalDetails?.message}</p>
                    )}
                    <span className='md:w-135 pl-3 pt-1 text-sm block'>Mention more details of the applicant's business such as Food Products manufacturer, Retail Trade of spices, Automobile company, Computer Programming, etc.</span>
                </div>
                <div className="my-3 md:flex justify-evenly">
                    <div>
                        <label htmlFor="male" className="block my-1 text-sm font-medium text-black">14. Male*</label>
                        <input type="text" id="male" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-43 p-2"
                            placeholder="Male" {...registrationRegister('male', { required: "Number of male employees is required" })} />
                        {registrationErrors?.male && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.male?.message}</p>
                        )}
                        <span className='w-40 pl-3 pt-1 text-sm block'>Enter the number of male of employees working in the firm.</span>
                    </div>
                    <div>
                        <label htmlFor="female" className="block my-1 text-sm font-medium text-black">15. Female*</label>
                        <input type="text" id="female" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-43 p-2"
                            placeholder="Female" {...registrationRegister('female', { required: "Number of female employees is required" })} />
                        {registrationErrors?.female && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.female?.message}</p>
                        )}
                        <span className='w-40 pl-3 pt-1 text-sm block'>Enter the number of female of employees working in the firm.</span>
                    </div>
                    <div>
                        <label htmlFor="other" className="block my-1 text-sm font-medium text-black">16. Other*</label>
                        <input type="text" id="other" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-43 p-2"
                            placeholder="Other" {...registrationRegister('other', { required: "Number of other employees is required" })} />
                        {registrationErrors?.other && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.other?.message}</p>
                        )}
                        <span className='w-40 pl-3 pt-1 text-sm block'>Enter the number of other of employees working in the firm.</span>
                    </div>
                </div>
                <div className="my-3 md:flex justify-evenly">
                    <div>
                        <label htmlFor="account" className="block my-1 text-sm font-medium text-black">17. Bank Account Number*</label>
                        <input type="text" id="account" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            placeholder="Bank Account Number" {...registrationRegister('account', { required: "Applicant's bank account is required" })} />
                        {registrationErrors?.account && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.account?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's bank account number.</span>
                    </div>
                    <div>
                        <label htmlFor="ifsc" className="block my-1 text-sm font-medium text-black">18. IFSC Code*</label>
                        <input type="text" id="ifsc" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            placeholder="IFSC Code" {...registrationRegister('ifsc', { required: "Applicant's IFSC code is required" })} />
                        {registrationErrors?.ifsc && (
                            <p className="text-red-500 text-sm mt-1">{registrationErrors?.ifsc?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the IFSC code of the applicant's bank account.</span>
                    </div>
                </div>
                <div className="my-3">
                    <label htmlFor="panCard" className="block my-1 text-sm font-medium text-black">19. Pan Card Number*</label>
                    <input type="text" id="panCard" className="border border-gray-300 text-black
                    text-sm rounded-lg block w-full p-2"
                        placeholder="Pan Card Number" {...registrationRegister('panCard', {
                            minLength: {
                                value: 10,
                                message: "Applicant's pan card number must be 10"
                            }, required: "Applicant's pan card number is required"
                        })} />
                    {registrationErrors?.panCard && (
                        <p className="text-red-500 text-sm mt-1">{registrationErrors?.panCard?.message}</p>
                    )}
                    <span className='md:w-135 pl-3 pt-1 text-sm block'>Enter the 10-digit unique alphanumeric number mentioned on the applicant's PAN CARD.</span>
                </div>
                <button style={{ backgroundColor: "#ff9933" }} type="submit" className="w-full text-white bg-black font-medium rounded-lg text-sm px-5 my-2 py-2.5 text-center">Submit Application</button>
            </form>
        </div>
    );
}

export default Form;