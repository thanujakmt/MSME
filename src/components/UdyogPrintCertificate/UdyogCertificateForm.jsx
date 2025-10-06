function UdyogCertificateForm() {
    return (
        <div className='flex flex-col w-150'>
            <span class="bg-blue p-4 block text-white font-bold text-xl">Udyam Registration 2025</span>
            <form class=" bg-gray-100 border border-gray-300 p-5">
                <div class="my-3 mt-4 flex justify-between">
                    <div>
                        <label for="email" class="block  text-sm font-medium text-black">1. Name of Owner*</label>
                        <input type="email" id="email" class="border border-gray-300 text-black
                                        text-sm rounded-lg block w-65 p-2"
                                            placeholder="Applicant Name" required />
                        <span class='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's name as mentioned on the PAN CARD</span>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-black">2. Mobile Number*</label>
                        <input type="email" id="email" class="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                        placeholder="Mobile Number" required />
                        <span class='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's 10-digit mobile number without adding +91.</span>
                    </div>
                </div>
                <div class="my-3 flex justify-between">
                    <div>
                        <label for="email" class="block my-1 text-sm font-medium text-black">3. E-Mail ID*</label>
                        <input type="email" id="email" class="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                        placeholder="Email ID" required />
                        <span class='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Email Id. Udyam Registration Certificate will be shared on that Email.</span>
                    </div>
                    <div>
                        <label for="email" class="block my-1 text-sm font-medium text-black">4. UAM Number*</label>
                        <input type="email" id="email" class="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                        placeholder="UAM Number" required />
                        <span class='w-60 pl-3 pt-1 text-sm block'>Applicant need to enter his / her 12 digit
    UAM number. Uam number will be found
    on the certificate as indicated below.</span>
                    </div>
                </div>
                <div class="my-3">
                    <div>
                        <label for="email" class="block my-1 text-sm font-medium text-black">5. State*</label>
                        <select id="countries" class="border border-gray-300 text-black text-sm rounded-lg p-2 w-full">
                            <option>Select State</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                        <span class='w-60 pl-3 pt-1 text-sm block'>Select the applicant's Office State</span>
                    </div>
                </div>
                <div class="my-3 mt-5">
                    <div class="flex items-start mb-5">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 " required />
                        </div>
                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900">I agree to the Terms of Service</label>
                    </div>
                </div>
            </form>
            <button type="submit" class="w-full text-white bg-black font-medium rounded-lg text-sm px-5 my-2 py-2.5 text-center">Submit</button>
        </div>
    );
}

export default UdyogCertificateForm;