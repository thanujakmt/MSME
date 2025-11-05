import { useForm } from 'react-hook-form';
import States_Districts from '../../States_Districts.json';
import { useEffect, useState } from 'react';
import { useCancelRegistrationMutation } from '../../api';
import { FullscreenLoader } from '../FullscreenLoader';
import { Toast } from '../Toast';

function CancelRegistrationForm() {
    const [cancelRegistation, { isLoading, isSuccess, data: cancelRegistationData }] = useCancelRegistrationMutation();
    const [toastvisible, setToastVisible] = useState(true);
    const [stateVal, setStateVal] = useState("");

    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        console.log("rfggfrewerfgb", data);
        let payload_data = {};
        payload_data['applicant_name'] = data.name;
        payload_data['mobile_number'] = data.number;
        payload_data['email_id'] = data.email;
        payload_data['category'] = 'OMNH';
        payload_data['additional_info'] = {
            state: data.state,
            udyamUamNumber: data.uamNumber,
            businessName: data.businessName,
            district: data.district,
            TypeOfCancellation: data.cancellation,
            agreeToTerms: data.termsOfService
        }
        // data['formId'] = "regA1Z9C4T"
        await cancelRegistation(payload_data)
    }

    useEffect(() => {
        if (isSuccess && (cancelRegistationData)) {            
            setTimeout(() => {
                setToastVisible(false)
            }, 3000);
            resetField("name")
            resetField("number")
            resetField("email")
            resetField("state")
            resetField("uamNumber")
            resetField("district")
            resetField('busineesName')
            resetField('cancellation')
            resetField("termsOfService")
        }
    }, [isSuccess, cancelRegistationData]);

    const districts = (data) => {
        return data?.map((dist) => (
            <option value={dist} key={dist}>
                {dist}
            </option>
        ));
    };


    return (
        <div className='md:w-160'>
            <span className="bg-blue p-4 block text-white font-bold text-xl">Cancel Udyam Registration Online Form</span>
            <form className=" bg-gray border border-gray-300 p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="my-3 mt-4 md:flex justify-evenly">
                    <div>
                        <label htmlFor="name" className="block  text-sm font-medium text-black">1. Name of Owner*</label>
                        <input type="text" id="name" className="border border-gray-300 text-black
                                        text-sm rounded-lg block w-65 p-2"
                            {...register('name', { required: "Applicant's name is required" })}
                            placeholder="Applicant Name" />
                        {errors?.name && (
                            <p className="text-red-500 text-sm mt-1">{errors?.name?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's name as mentioned on the PAN CARD</span>
                    </div>
                    <div>
                        <label htmlFor="number" className="block text-sm font-medium text-black">2. Mobile Number*</label>
                        <input type="number" id="number" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            {...register('number', {
                                minLength: {
                                    value: 10,
                                    message: "Applicant's mobile number must be 10"
                                }, maxLength: {
                                    value: 10,
                                    message: "Applicant's mobile number cannot exceed 10 characters",
                                }, required: "Applicant's mobile number is required"
                            })}
                            placeholder="Mobile Number" />
                        {errors?.number && (
                            <p className="text-red-500 text-sm mt-1 w-60">{errors?.number?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's 10-digit mobile number without adding +91.</span>
                    </div>
                </div>
                <div className="my-3 md:flex justify-evenly">
                    <div>
                        <label htmlFor="email" className="block my-1 text-sm font-medium text-black">3. E-Mail ID*</label>
                        <input type="email" id="email" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2" {...register('email', { required: "Applicant's email id is required" })}
                            placeholder="Email ID" />
                        {errors?.email && (
                            <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Email Id. Udyam Registration Certificate will be shared on that Email.</span>
                    </div>
                    <div>
                        <label htmlFor="uamNumber" className="block my-1 text-sm font-medium text-black">4. UAM Number*</label>
                        <input type="number" id="uamNumber" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            placeholder="UAM Number" {...register('uamNumber', {
                                minLength: {
                                    value: 12,
                                    message: "Applicant's UAM number must be 12"
                                }, required: "Applicant's UAM number is required"
                            })} />
                        {errors?.uamNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors?.uamNumber?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Applicant need to enter his / her 12 digit
                            UAM number. Uam number will be found
                            on the certificate as indicated below.</span>
                    </div>
                </div>
                <div className="my-3 md:flex justify-evenly">
                    <div>
                        <label htmlFor="businessName" className="block my-1 text-sm font-medium text-black">5. Business Name*</label>
                        <input type="text" id="businessName" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            placeholder="Business Name" {...register('businessName', { required: "Applicant's business name is required" })} />
                        {errors?.businessName && (
                            <p className="text-red-500 text-sm mt-1">{errors?.businessName?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Business Name</span>
                    </div>
                    <div>
                        <label htmlFor="cancellation" className="block my-1 text-sm font-medium text-black">6. Type of Cancellation*</label>
                        <select id="cancellation" className="border border-gray-300 text-black text-sm rounded-lg p-2 w-65" {...register('cancellation', { required: 'Type of Cancellation is required' })}>
                            <option value="">Select Type of Cancellation</option>
                            <option>No Further Need</option>
                            <option>I have shut down my business</option>
                            <option>This is my duplicate UDYAM/UAM</option>
                            <option>Company Owner Changed</option>
                            <option>Other</option>
                        </select>
                        {errors?.cancellation && (
                            <p className="text-red-500 text-sm mt-1">{errors?.cancellation?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Applicant are required to enter reason htmlFor
                            cancellation</span>
                    </div>
                </div>
                <div className="my-3 md:flex justify-evenly">
                    <div>
                        <label htmlFor="state" className="block my-1 text-sm font-medium text-black">7. State*</label>
                        <select id="state" className="border border-gray-300 text-black text-sm rounded-lg p-2 w-65"
                            {...register("state", {
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
                        {errors?.state && (
                            <p className="text-red-500 text-sm mt-1">{errors?.state?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Select the applicant's Office State</span>
                    </div>
                    <div>
                        <label htmlFor="district" className="block my-1 text-sm font-medium text-black">8. District*</label>
                        <select
                            id="district"
                            className="border border-gray-300 text-black text-sm rounded-lg p-2 w-65"
                            {...register('district', { required: "Applicant's district is required" })}
                        >
                            <option value="">Select District</option>
                            {districts(
                                States_Districts?.find((item) => item?.state === stateVal)?.districts
                            )}
                        </select>
                        {errors?.district && (
                            <p className="text-red-500 text-sm mt-1">{errors?.district?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Select the applicant's Office District</span>
                    </div>
                </div>
                <div className="my-3 mt-5">
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="termsOfService" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 " {...register('termsOfService', { required: "Terms Of Service is required" })} />
                        </div>
                        <label htmlFor="termsOfService" className="ms-2 text-sm font-medium text-gray-900">I agree to the Terms of Service</label>
                    </div>
                    {errors?.termsOfService && (
                        <p className="text-red-500 text-sm mt-1">{errors?.termsOfService?.message}</p>
                    )}
                </div>
                <button type="submit" disabled={isLoading} style={{ backgroundColor: "#ff9933" }} className="w-full text-white font-medium rounded-lg text-sm px-5 my-2 py-2.5 text-center">{isLoading && <FullscreenLoader />}Submit</button>
                {isSuccess && <Toast message={cancelRegistationData?.message} visible={toastvisible} />}
                
            </form>


        </div>
    );
}

export default CancelRegistrationForm;
