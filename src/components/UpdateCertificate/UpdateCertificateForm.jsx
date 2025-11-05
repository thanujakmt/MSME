import { useForm } from "react-hook-form";
import States_Districts from '../../States_Districts.json';
import { useApplicantsMutation } from '../../api';
import { FullscreenLoader } from "../FullscreenLoader";
import { Toast } from "../Toast";
import { useEffect, useState } from "react";

function UpdateCertificateForm() {
    const [updateCertificate, {isLoading, isSuccess, data: updateCertificateData}] = useApplicantsMutation();
    const [toastvisible, setToastVisible] = useState(true);
    
    const {
        register: updateRegister,
        handleSubmit: updateHandleSubmit,
        resetField: updateResetField,
        formState: { errors: updateErrors }
    } = useForm();

    const onSubmit = async (data) => {
        console.log("rfggfrewerfgb", data);
        let payload_data = {};
        payload_data['applicant_name'] = data.name;
        payload_data['mobile_number'] = data.number;
        payload_data['email_id'] = data.email;
        payload_data['category'] = 'OMNH';
        payload_data['additional_info'] = {
            detailsToBeUpdatedOnCertificate: data.additionalDetails,
            state: data.state,
            // agreeToTerms: data.termsOfService1
        }
        // data['formId'] = "regA1Z9C4T"
        await updateCertificate(payload_data)
    }

    useEffect(() => {
        if (isSuccess && updateCertificateData) {
            setTimeout(() => {
                setToastVisible(false)
            }, 3000);
            updateResetField("name")
            updateResetField("number")
            updateResetField("email")
            updateResetField("additionalDetails")
            updateResetField("state")
            // updateResetField("termsOfService1")
        }
    }, [isSuccess, updateCertificateData]);

    return (
        <div className='flex flex-col lg:w-150'>
            <span className="bg-blue p-4 block text-white font-bold text-xl">Update Udyam Registration Certificate Online</span>
            <form className=" bg-gray-100 border border-gray-300 p-5" onSubmit={updateHandleSubmit(onSubmit)}>
                <div className="my-3 mt-4 lg:flex justify-evenly">
                    <div>
                        <label htmlFor="name" className="block  text-sm font-medium text-black">1. Name of Owner*</label>
                        <input type="text" id="name" className="border border-gray-300 text-black
                                        text-sm rounded-lg block w-65 p-2"
                            {...updateRegister('name', { required: "Applicant's name is required" })}
                            placeholder="Applicant Name" />
                        {updateErrors?.name && (
                            <p className="text-red-500 text-sm mt-1">{updateErrors?.name?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's name as mentioned on the PAN CARD</span>
                    </div>
                    <div>
                        <label htmlFor="number" className="block text-sm font-medium text-black">2. Mobile Number*</label>
                        <input type="number" id="number" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            {...updateRegister('number', {
                                minLength: {
                                    value: 10,
                                    message: "Applicant's mobile number must be 10"
                                }, maxLength: {
                                    value: 10,
                                    message: "Applicant's mobile number cannot exceed 10 characters",
                                },  required: "Applicant's mobile number is required"
                            })}
                            placeholder="Mobile Number" />
                        {updateErrors?.number && (
                            <p className="text-red-500 text-sm mt-1 w-60">{updateErrors?.number?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's 10-digit mobile number without adding +91.</span>
                    </div>
                </div>
                <div className="my-3 lg:flex justify-evenly">
                    <div>
                        <label htmlFor="email" className="block my-1 text-sm font-medium text-black">3. E-Mail ID*</label>
                        <input type="email" id="email" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2" {...updateRegister('email', { required: "Applicant's email id is required" })}
                            placeholder="Email ID" />
                        {updateErrors?.email && (
                            <p className="text-red-500 text-sm mt-1">{updateErrors?.email?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Email Id. Udyam Registration Certificate will be shared on that Email.</span>
                    </div>
                    <div>
                        <label htmlFor="registrationNumber" className="block my-1 text-sm font-medium text-black">4. Udyam Registration Number*</label>
                        <input type="number" id="registrationNumber" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            placeholder="Udyog Registration Number" {...updateRegister('registrationNumber', {
                                required: "Applicant's udyam registration number is required"
                            })} />
                        {updateErrors?.registrationNumber && (
                            <p className="text-red-500 text-sm mt-1">{updateErrors?.registrationNumber?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Applicant need to enter his udyam registration number. as mentioned on udyam certificate</span>
                    </div>
                </div>
                <div className="my-3">
                    <div>
                        <label htmlFor="state" className="block my-1 text-sm font-medium text-black">5. State*</label>
                        <select id="state" className="border border-gray-300 text-black text-sm rounded-lg p-2 w-full"
                            {...updateRegister("state", {
                                required: "Applicant's state is required"
                            })}>
                            <option value="">Select State</option>
                            {States_Districts?.map((item) => {
                                return (
                                    <option value={item?.state} key={item?.state}>{item?.state}</option>
                                )
                            })}
                        </select>
                        {updateErrors?.state && (
                            <p className="text-red-500 text-sm mt-1">{updateErrors?.state?.message}</p>
                        )}
                        <span className='w-full pl-3 pt-1 text-sm block'>Select the applicant's Office State</span>
                    </div>
                </div>
                <div className="my-3">
                    <div>
                        <label htmlFor="additionalDetails" className="block my-1 text-sm font-medium text-black">6. Details To Be Updated On Certificate*</label>
                        <p className="text-red-500 text-xs pb-3">KYC DETAILS, PAN Number, State And District Cannot be Updated</p>
                        <textarea rows={3} type="text" id="additionalDetails" className="border border-gray-300 text-black text-sm rounded-lg block w-full p-2"
                            placeholder="Details To Be Updated On Certificate"  {...updateRegister('additionalDetails', { required: "Additional details is required" })} />
                        {updateErrors?.additionalDetails && (
                            <p className="text-red-500 text-sm mt-1">{updateErrors?.additionalDetails?.message}</p>
                        )}
                        <span className='pl-3 pt-1 text-sm block w-full'>Enter the applicant's Details To Be Updated On Certificate.</span>
                    </div>
                </div>
                <button style={{ backgroundColor: "#ff6900" }} type="submit" className="w-full text-white font-medium rounded-lg text-sm px-5 my-2 py-2.5 text-center">{isLoading && <FullscreenLoader />}Submit</button>
                {isSuccess && <Toast message={updateCertificateData?.message} visible={toastvisible} />}
            </form>
        </div>
    );
}

export default UpdateCertificateForm;
