import { useForm } from "react-hook-form";
import States_Districts from "../../States_Districts.json";

function PrintCertificateForm() {
    const {
        register: printRegister,
        handleSubmit: printHandleSubmit,
        formState: { errors: printErrors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("rfggfrewerfgb", data);
    }

    return (
        <div>
            <span className="bg-blue p-4 block text-white font-bold text-xl">Application Form To Print Udyam Certificate</span>
            <form className=" bg-gray border border-gray-300 p-5" onSubmit={printHandleSubmit(onSubmit)}>
                <div className="my-3 mt-4 lg:flex justify-evenly">
                    <div>
                        <label htmlFor="name" className="block  text-sm font-medium text-black">1. Name of Owner*</label>
                        <input type="text" id="name" className="border border-gray-300 text-black
                                        text-sm rounded-lg block w-65 p-2"
                            {...printRegister('name', { required: "Applicant's name is required" })}
                            placeholder="Applicant Name" />
                        {printErrors?.name && (
                            <p className="text-red-500 text-sm mt-1">{printErrors?.name?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's name as mentioned on the PAN CARD</span>
                    </div>
                    <div>
                        <label htmlFor="number" className="block text-sm font-medium text-black">2. Mobile Number*</label>
                        <input type="number" id="number" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            {...printRegister('number', {
                                minLength: {
                                    value: 10,
                                    message: "Applicant's mobile number must be 10"
                                }, maxLength: {
                                    value: 10,
                                    message: "Applicant's mobile number cannot exceed 10 characters",
                                }, required: "Applicant's mobile number is required"
                            })}
                            placeholder="Mobile Number" />
                        {printErrors?.number && (
                            <p className="text-red-500 text-sm mt-1 w-60">{printErrors?.number?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's 10-digit mobile number without adding +91.</span>
                    </div>
                </div>
                <div className="my-3 lg:flex justify-evenly">
                    <div>
                        <label htmlFor="email" className="block my-1 text-sm font-medium text-black">3. E-Mail ID*</label>
                        <input type="email" id="email" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2" {...printRegister('email', { required: "Applicant's email id is required" })}
                            placeholder="Email ID" />
                        {printErrors?.email && (
                            <p className="text-red-500 text-sm mt-1">{printErrors?.email?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Email Id. Udyam Registration Certificate will be shared on that Email.</span>
                    </div>
                    <div>
                        <label htmlFor="registrationNumber" className="block my-1 text-sm font-medium text-black">4. Udyam Registration Number*</label>
                        <input type="number" id="registrationNumber" className="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                            placeholder="Udyog Registration Number" {...printRegister('registrationNumber', {
                                required: "Applicant's udyam registration number is required"
                            })} />
                        {printErrors?.registrationNumber && (
                            <p className="text-red-500 text-sm mt-1 w-60">{printErrors?.registrationNumber?.message}</p>
                        )}
                        <span className='w-60 pl-3 pt-1 text-sm block'>Applicant need to enter his udyam registration number. as mentioned on udyam certificate</span>
                    </div>
                </div>
                <div className="my-3">
                    <div>
                        <label htmlFor="state" className="block my-1 text-sm font-medium text-black">5. State*</label>
                        <select id="state" className="border border-gray-300 text-black text-sm rounded-lg p-2 w-full"
                            {...printRegister("state", {
                                required: "Applicant's state is required"
                            })}>
                            <option value="">Select State</option>
                            {States_Districts?.map((item) => {
                                return (
                                    <option value={item?.state} key={item?.state}>{item?.state}</option>
                                )
                            })}
                        </select>
                        {printErrors?.state && (
                            <p className="text-red-500 text-sm mt-1">{printErrors?.state?.message}</p>
                        )}
                        <span className='w-full pl-3 pt-1 text-sm block'>Select the applicant's Office State</span>
                    </div>
                </div>
                <div className="my-3 mt-5">
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="termsOfService" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 " {...printRegister('termsOfService', { required: "Terms Of Service is required" })} />
                        </div>
                        <label htmlFor="termsOfService" className="ms-2 text-sm font-medium text-gray-900">I agree to the Terms of Service</label>
                    </div>
                    {printErrors?.termsOfService && (
                        <p className="text-red-500 text-sm mt-1">{printErrors?.termsOfService?.message}</p>
                    )}
                </div>
                <button type="submit" style={{ backgroundColor: "#ff6900" }} className="w-full text-white font-medium rounded-lg text-sm px-5 my-2 py-2.5 text-center">Submit</button>
            </form>
        </div>
    );
}

export default PrintCertificateForm;