import React from 'react';
import States_Districts from '../../States_Districts.json';
import { useForm } from 'react-hook-form';
import { useRe_registerUserMutation } from '../../api';

function ReRegistrationForm() {
    const [re_registeredData, {isLoading}] = useRe_registerUserMutation();
    const {
        register: re_registrationRegister,
        handleSubmit: re_registrationHandleSubmit,
        formState: { errors: re_registrationErrors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("rfggfrewerfgb", data);
        re_registeredData(data)
    }

    return (
        <div>
            <span className="bg-blue p-4 block text-white font-bold text-xl">Udyam Re Registration Online Form</span>
            <form className=" bg-gray border border-gray-300 p-5" onSubmit={re_registrationHandleSubmit(onSubmit)}>
                <div className="my-3 mt-4 md:flex justify-evenly">
                    <div>
                        <label htmlFor="name" className="block  text-sm font-medium text-black">1. Name of Owner*</label>
                        <input type="text" id="name" className="border border-gray-300 text-black
                                        text-sm rounded-lg block w-65 p-2"
                            {...re_registrationRegister('name', { required: "Applicant's name is required" })}
                            placeholder="Applicant Name" />
                        {re_registrationErrors?.name && (
                            <p className="text-red-500 text-sm mt-1">{re_registrationErrors?.name?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's name as mentioned on the PAN CARD</span>
                    </div>
                    <div>
                        <label htmlFor="number" className="block text-sm font-medium text-black">2. Mobile Number*</label>
                        <input type="number" id="number" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            {...re_registrationRegister('number', {
                                minLength: {
                                    value: 10,
                                    message: "Applicant's mobile number must be 10"
                                }, maxLength: {
                                    value: 10,
                                    message: "Applicant's mobile number cannot exceed 10 characters",
                                }, required: "Applicant's mobile number is required"
                            })}
                            placeholder="Mobile Number" />
                        {re_registrationErrors?.number && (
                            <p className="text-red-500 text-sm mt-1 w-60">{re_registrationErrors?.number?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's 10-digit mobile number without adding +91.</span>
                    </div>
                </div>
                <div className="my-3 md:flex justify-evenly">
                    <div>
                        <label htmlFor="email" className="block my-1 text-sm font-medium text-black">3. E-Mail ID*</label>
                        <input type="email" id="email" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2" {...re_registrationRegister('email', { required: "Applicant's email id is required" })}
                            placeholder="Email ID" />
                        {re_registrationErrors?.email && (
                            <p className="text-red-500 text-sm mt-1">{re_registrationErrors?.email?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Email Id. Udyam Registration Certificate will be shared on that Email.</span>
                    </div>
                    <div>
                        <label htmlFor="uamNumber" className="block my-1 text-sm font-medium text-black">4. UAM Number*</label>
                        <input type="number" id="uamNumber" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            placeholder="UAM Number" {...re_registrationRegister('uamNumber', {
                                minLength: {
                                    value: 12,
                                    message: "Applicant's UAM number must be 12"
                                }, required: "Applicant's UAM number is required"
                            })} />
                        {re_registrationErrors?.uamNumber && (
                            <p className="text-red-500 text-sm mt-1">{re_registrationErrors?.uamNumber?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Applicant need to enter his / her 12 digit
                            UAM number. Uam number will be found
                            on the certificate as indicated below.</span>
                    </div>
                </div>
                <div className="my-3">
                    <div>
                        <label htmlFor="state" className="block my-1 text-sm font-medium text-black">7. State*</label>
                        <select id="state" className="border border-gray-300 text-black text-sm rounded-lg p-2 w-65"
                            {...re_registrationRegister("state", {
                                required: "Applicant's state is required"
                            })}>
                            <option value="">Select State</option>
                            {States_Districts?.map((item) => {
                                return (
                                    <option value={item?.state} key={item?.state}>{item?.state}</option>
                                )
                            })}
                        </select>
                        {re_registrationErrors?.state && (
                            <p className="text-red-500 text-sm mt-1">{re_registrationErrors?.state?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Select the applicant's Office State</span>
                    </div>
                </div>
                <div className="my-3">
                    <label htmlFor="email" className="block my-1 text-sm font-medium text-black">Do you want to make any changes in details of your existing
                        Udyog/Udyam Certificate?</label>
                    <div className='md:flex'>
                        <div className="flex items-center pr-5">
                            <input id="country-option-1" type="radio" name="yes" value="yes" className="w-4 h-4 border-gray-300 " {...re_registrationRegister('updateChange')} />
                            <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900">
                                Yes
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="country-option-2" type="radio" name="no" value="no" className="w-4 h-4 border-gray-300" {...re_registrationRegister('updateChange')} />
                            <label htmlFor="country-option-2" className="block ms-2 text-sm font-medium text-gray-900">
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <div className="my-3 mt-5">
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="termsOfService" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 " {...re_registrationRegister('termsOfService', { required: "Terms Of Service is required" })} />
                        </div>
                        <label htmlFor="termsOfService" className="ms-2 text-sm font-medium text-gray-900">I agree to the Terms of Service</label>
                    </div>
                    {re_registrationErrors?.termsOfService && (
                        <p className="text-red-500 text-sm mt-1">{re_registrationErrors?.termsOfService?.message}</p>
                    )}
                </div>
                <button disabled={isLoading} style={{ backgroundColor: "#ff9933" }} type="submit" className="w-full text-white font-medium rounded-lg text-sm px-5 my-2 py-2.5 text-center">Submit</button>
            </form>
        </div>
    );
}

export default ReRegistrationForm;