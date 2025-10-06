import React from 'react';

function Eligibility() {
    return (
        <div class=" bg-white px-[20px]  2xl:px-[150px] py-[20px]">
            <span class="text-orange-500 text-[26px] py-5 font-bold">Easy Registration</span>
            <div class="flex px-5 pb-5 pt-2">
                <ul class="list-disc text-[14px]">
                    <li className="text-xl text-blue"><span className="text-sm text-black">Business Owner’s Aadhar Number</span></li>
                    <li className="text-xl text-blue"><span className="text-sm text-black">PAN Card</span></li>
                    <li className="text-xl text-blue"><span className="text-sm text-black">Business Name, Address and Bank Details</span></li>
                    <li className="text-xl text-blue"><span className="text-sm text-black">Contact Number Linked to Aadhar Card</span></li>
                </ul>
            </div>
            <span class="text-orange-500 text-[26px] py-5 font-bold">Who Is Eligible For MSME Registration?</span>
            <div class="flex px-5 pb-5 pt-2">
                <ul class="list-disc text-[14px]">
                    <li className="text-xl text-blue"><b className="text-sm text-black">Individual Entrepreneurs</b></li>
                    <li className="text-xl text-blue"><b className="text-sm text-black">Private Firms owned by two or more Partners</b></li>
                    <li className="text-xl text-blue"><b className="text-sm text-black">Private Limited Companies</b></li>
                    <li className="text-xl text-blue"><b className="text-sm text-black">LLPs and Coorporetives</b></li>
                    <li className="text-xl text-blue"><b className="text-sm text-black">Startups looking for financial support</b></li>
                </ul>
            </div>
            <span class="text-[12px]">If your investment in plant and machinery or equipment falls under the government’s MSME definition, you are eligible!</span>
        </div>
    );
}

export default Eligibility;