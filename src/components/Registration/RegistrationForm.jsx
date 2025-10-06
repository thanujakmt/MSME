import React from 'react';

function Form() {
    return (
        <div className='flex flex-col'>
            <span class="bg-blue p-6 text-white">Udyam Registration 2025 - Application Form / उद्यम जीकरण के लिए आवेदन करे</span>
            <form class=" bg-gray border border-gray-300 p-5">
            <div class="my-3 mt-4 md:flex justify-evenly ">
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
            <div class="my-3 md:flex justify-evenly">
                <div>
                    <label for="email" class="block my-1 text-sm font-medium text-black">3. E-Mail ID*</label>
                    <input type="email" id="email" class="border border-gray-300 text-black
                    text-sm rounded-lg block w-65 p-2"
                    placeholder="Email ID" required />
                    <span class='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Email Id. Udyam Registration Certificate will be shared on that Email.</span>
                 </div>
                 <div>
                    <label for="email" class="block my-1 text-sm font-medium text-black">4. Social Category*</label>
                    <input type="email" id="email" class="border border-gray-300 text-black
                    text-sm rounded-lg block w-65 p-2"
                    placeholder="Select Social Category" required />
                    <span class='w-60 pl-3 pt-1 text-sm block'>Select the social category of the applicant.</span>
                </div>
            </div>
            <div class="my-3 md:flex justify-evenly">
                <div>
                    <label for="email" class="block my-1 text-sm font-medium text-black">5. Office Address*</label>
                    <input type="email" id="email" class="border border-gray-300 text-black
                    text-sm rounded-lg block w-65 p-2"
                    placeholder="Office Address" required />
                    <span class='w-60 pl-3 pt-1 text-sm block'>Office Address Enter the applicant's plant address.</span>
                 </div>
                 <div>
                    <label for="email" class="block my-1 text-sm font-medium text-black">6. Pin COde*</label>
                    <input type="email" id="email" class="border border-gray-300 text-black
                    text-sm rounded-lg block w-65 p-2"
                    placeholder="Pin Code" required />
                    <span class='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Office Pin Code</span>
                </div>
            </div>
            <div class="my-3 md:flex justify-evenly">
                <div>
                    <label for="email" class="block my-1 text-sm font-medium text-black">7. State*</label>
                    <select id="countries" class="border border-gray-300 text-black text-sm rounded-lg p-2 w-65">
                        <option>Select State</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                    <span class='w-60 pl-3 pt-1 text-sm block'>Select the applicant's Office State</span>
                 </div>
                 <div>
                    <label for="email" class="block my-1 text-sm font-medium text-black">8. District*</label>
                    <select id="countries" class="border border-gray-300 text-black text-sm rounded-lg p-2 w-65">
                        <option>Select District</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                    <span class='w-60 pl-3 pt-1 text-sm block'>Select the applicant's Office District</span>
                </div>
            </div>
            <div class="my-3 md:flex justify-evenly">
                <div>
                    <label for="email" class="block my-1 text-sm font-medium text-black">9. Type of Organisation*</label>
                    <select id="countries" class="border border-gray-300 text-black text-sm rounded-lg p-2 w-65">
                        <option>Type of Organisation</option>
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
                    <span class='w-60 pl-3 pt-1 text-sm block'>Select the type of organization or business the applicant owns.</span>
                 </div>
                 <div>
                    <label for="email" class="block my-1 text-sm font-medium text-black">10. Business Name*</label>
                    <input type="email" id="email" class="border border-gray-300 text-black
                    text-sm rounded-lg block w-65 p-2"
                    placeholder="Business Name" required />
                    <span class='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's Business Name</span>
                </div>
            </div>
            <div class="my-3 md:flex justify-evenly">
                <div>
                    <label for="email" class="block my-1 text-sm font-medium text-black">11. Date of Commencement of Business*</label>
                    <input type="email" id="email" class="border border-gray-300 text-black
                    text-sm rounded-lg block w-65 p-2"
                    placeholder="Date of Commencement of Business" required />
                    <span class='w-60 pl-3 pt-1 text-sm block'>Enter the date when the business started.</span>
                 </div>
                 <div>
                    <label for="email" class="block my-1 text-sm font-medium text-black">12. Main Business Activity*</label>
                    <select id="countries" class="border border-gray-300 text-black text-sm rounded-lg p-2 w-65">
                        <option>Select Business Activity</option>
                        <option>Manufacturer</option>
                        <option>Service Provider</option>
                        <option>Traders</option>
                    </select>
                    <span class='w-60 pl-3 pt-1 text-sm block'>Select the main business activity of the applicant's enterprise.</span>
                </div>
            </div>
            <div class="my-3">
                <label for="email" class="block my-1 text-sm font-medium text-black">13. Additional Details About Business*</label>
                <textarea rows={3} type="email" id="email" class="border border-gray-300 text-black
                    text-sm rounded-lg block w-full p-2"
                    placeholder="Additional Details About Business" required />
                    <span class='md:w-135 pl-3 pt-1 text-sm block'>Mention more details of the applicant's business such as Food Products manufacturer, Retail Trade of spices, Automobile company, Computer Programming, etc.</span>
            </div>
            <div class="my-3 md:flex justify-evenly">
                    <div>
                        <label for="email" class="block my-1 text-sm font-medium text-black">14. Male*</label>
                        <input type="email" id="email" class="border border-gray-300 text-black
                        text-sm rounded-lg block w-43 p-2"
                        placeholder="Male" required />
                        <span class='w-40 pl-3 pt-1 text-sm block'>Enter the number of male of employees working in the firm.</span>
                    </div>
                    <div>
                        <label for="email" class="block my-1 text-sm font-medium text-black">15. Female*</label>
                        <input type="email" id="email" class="border border-gray-300 text-black
                        text-sm rounded-lg block w-43 p-2"
                        placeholder="Female" required />
                        <span class='w-40 pl-3 pt-1 text-sm block'>Enter the number of female of employees working in the firm.</span>
                    </div>
                    <div>
                        <label for="email" class="block my-1 text-sm font-medium text-black">16. Other*</label>
                        <input type="email" id="email" class="border border-gray-300 text-black
                        text-sm rounded-lg block w-43 p-2"
                        placeholder="Other" required />
                        <span class='w-40 pl-3 pt-1 text-sm block'>Enter the number of other of employees working in the firm.</span>
                    </div>
            </div>
            <div class="my-3 md:flex justify-evenly">
                    <div>
                        <label for="email" class="block my-1 text-sm font-medium text-black">17. Bank Account Number*</label>
                        <input type="email" id="email" class="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                        placeholder="Bank Account Number" required />
                        <span class='w-60 pl-3 pt-1 text-sm block'>Enter the applicant's bank account number.</span>
                    </div>
                    <div>
                        <label for="email" class="block my-1 text-sm font-medium text-black">18. IFSC Code*</label>
                        <input type="email" id="email" class="border border-gray-300 text-black
                        text-sm rounded-lg block w-65 p-2"
                        placeholder="IFSC Code" required />
                        <span class='w-60 pl-3 pt-1 text-sm block'>Enter the IFSC code of the applicant's bank account.</span>
                    </div>
            </div>
            <div class="my-3">
                    <label for="email" class="block my-1 text-sm font-medium text-black">19. Pan Card Number*</label>
                    <input type="email" id="email" class="border border-gray-300 text-black
                    text-sm rounded-lg block w-full p-2"
                    placeholder="Pan Card Number" required />
                    <span class='md:w-135 pl-3 pt-1 text-sm block'>Enter the 10-digit unique alphanumeric number mentioned on the applicant's PAN CARD.</span>
            </div>
        </form>
        <button style={{ backgroundColor: "#ff9933" }} type="submit" class="w-full text-white bg-black font-medium rounded-lg text-sm px-5 my-2 py-2.5 text-center">Submit Application</button>

        </div>
    );
}

export default Form;