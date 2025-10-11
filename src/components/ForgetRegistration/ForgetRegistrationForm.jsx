import React from 'react';
import { useForm } from 'react-hook-form';
import { useForgotRegistrationMutation } from '../../api';

function ForgetRegistrationForm() {
    
    const [forgotData, {isLoading}] = useForgotRegistrationMutation();
    const {
        register: forgotRegister,
        handleSubmit: forgotHandleSubmit,
        formState: { errors: forgotErrors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("rfggfrewerfgb", data);
        forgotData(data)
    }
    return (
        <div className=' '>
            <span className="bg-blue p-4 block text-white font-bold text-xl">Forgot Udyam Registration Form</span>
            <form className=" bg-gray border border-gray-300 p-5" onSubmit={forgotHandleSubmit(onSubmit)}>
                <div className="my-3 mt-4 md:flex gap-[30px] ">
                    <div className=' py-2'>
                        <label htmlFor="name" className="block  pb-2 text-sm font-medium text-black">1. Applicant Name*</label>
                        <input type="text" id="name" className="border border-gray-300 text-black
                                        text-sm rounded-lg block w-65 p-2"
                            {...forgotRegister('name', { required: "Applicant's name is required" })}
                            placeholder="Applicant Name" />
                        {forgotErrors?.name && (
                            <p className="text-red-500 text-sm mt-1">{forgotErrors?.name?.message}</p>
                        )}
                    </div>
                    <div className=' py-2'>
                        <label htmlFor="number" className="block pb-2 text-sm font-medium text-black">2. Mobile Number*</label>
                        <input type="number" id="number" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            {...forgotRegister('number', {
                                minLength: {
                                    value: 10,
                                    message: "Applicant's mobile number must be 10"
                                }, maxLength: {
                                    value: 10,
                                    message: "Applicant's mobile number cannot exceed 10 characters",
                                }, required: "Applicant's mobile number is required"
                            })}
                            placeholder="Mobile Number" />
                        {forgotErrors?.number && (
                            <p className="text-red-500 text-sm mt-1 w-60">{forgotErrors?.number?.message}</p>
                        )}
                    </div>
                </div >
                <div className="my-3  md:flex gap-[30px]">
                    <div>
                        <label htmlFor="email" className="block my-1 pb-2 text-sm font-medium text-black">3. E-Mail ID*</label>
                        <input type="email" id="email" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2" {...forgotRegister('email', { required: "Applicant's email id is required" })}
                            placeholder="Email ID" />
                        {forgotErrors?.email && (
                            <p className="text-red-500 text-sm mt-1">{forgotErrors?.email?.message}</p>
                        )}
                    </div>
                    <div className=''>
                        <label htmlFor="recover" className="block my-1 pb-2 text-sm font-medium text-black">4. Select the Certificate to be Retrieve/Recover*</label>
                        <select id="recover" className="border border-gray-300 text-black text-sm rounded-lg p-2 w-65" {...forgotRegister('recover', { required: 'Certificate to be Retrieve/Recover is required' })}>
                            <option value="">Select the Certificate</option>
                            <option>Udyam Registration Certificate</option>
                            <option>Udyog Aadhar Registration Certificate</option>
                        </select>
                        {forgotErrors?.recover && (
                            <p className="text-red-500 text-sm mt-1 w-60">{forgotErrors?.recover?.message}</p>
                        )}
                    </div>
                </div>
                <div className="my-3 ">
                    <div>
                        <label htmlFor="verificationCode" className="block my-1 text-sm font-medium text-black">5. Verification Code*</label>
                        <input type="text" id="verificationCode" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2" {...forgotRegister('verificationCode', { required: "Applicant's email id is required" })}
                            placeholder="Verification Code" />
                        {forgotErrors?.verificationCode && (
                            <p className="text-red-500 text-sm mt-1">{forgotErrors?.verificationCode?.message}</p>
                        )}
                    </div>
                </div>
                <div className="my-3 mt-5">
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="termsOfService" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 " {...forgotRegister('termsOfService', { required: "Terms Of Service is required" })} />
                        </div>
                        <label htmlFor="termsOfService" className="ms-2 text-sm font-medium text-gray-900">I agree to the Terms of Service</label>
                    </div>
                    {forgotErrors?.termsOfService && (
                        <p className="text-red-500 text-sm mt-1">{forgotErrors?.termsOfService?.message}</p>
                    )}
                </div>
                <div className="my-3 mt-5">
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="termsOfService1" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 " {...forgotRegister('termsOfService1', { required: "Terms Of Service is required" })} />
                        </div>
                        <label htmlFor="termsOfService1" className="ms-2 text-sm font-medium text-gray-900">I, The applicant (owner of aadhaar number used in application) agree to share details / passcodes etc as & when required for the purpose of udyam certificate generation.</label>
                    </div>
                    {forgotErrors?.termsOfService1 && (
                        <p className="text-red-500 text-sm mt-1">{forgotErrors?.termsOfService1?.message}</p>
                    )}
                </div>
                <button disabled={isLoading} type="submit" style={{ backgroundColor: "#ff6900" }} className="w-full text-white font-medium rounded-lg text-sm px-5 my-2 py-2.5 text-center">Submit</button>
            </form>
        </div>
    );
}

export default ForgetRegistrationForm;