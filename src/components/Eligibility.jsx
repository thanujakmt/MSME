import React from 'react';

function Eligibility() {
    return (
        <div className=" bg-white px-[20px]  2xl:px-[150px] py-[20px]">
            <span className="text-pale_yellow text-[26px] py-5 font-bold">Easy Registration</span>
            <div className="flex px-5 pb-5 pt-2">
                <ul className="list-disc text-[14px]">
                    <li className="text-xl text-blue"><span className="text-sm text-black">Business Owner’s Aadhar Number</span></li>
                    <li className="text-xl text-blue"><span className="text-sm text-black">PAN Card</span></li>
                    <li className="text-xl text-blue"><span className="text-sm text-black">Business Name, Address and Bank Details</span></li>
                    <li className="text-xl text-blue"><span className="text-sm text-black">Contact Number Linked to Aadhar Card</span></li>
                </ul>
            </div>
            <span className="text-pale_yellow text-[26px] py-5 font-bold">Who Is Eligible For MSME Registration?</span>
            <div className="flex px-5 pb-5 pt-2">
                <ul className="list-disc text-[14px]">
                    <li className="text-xl text-blue"><b className="text-sm text-black">Individual Entrepreneurs</b></li>
                    <li className="text-xl text-blue"><b className="text-sm text-black">Private Firms owned by two or more Partners</b></li>
                    <li className="text-xl text-blue"><b className="text-sm text-black">Private Limited Companies</b></li>
                    <li className="text-xl text-blue"><b className="text-sm text-black">LLPs and Coorporetives</b></li>
                    <li className="text-xl text-blue"><b className="text-sm text-black">Startups looking for financial support</b></li>
                </ul>
            </div>
            <div className=' lg:flex lg:flex-row flex flex-col gap-[10px] 2xl:gap-[200px]'>
                <div>
                    <span className="text-[14px]">If your investment in plant and machinery or equipment falls under the government’s MSME definition, you are eligible!</span>
                </div>
                <a className='bg-orange px-5 py-1 rounded-[5px] text-white 2xl:text-[18px] text-center font-bold' href={"/register"}>
                    <button>Get Udyam Registration</button>
                </a>
            </div>
        </div>
    );
}

export default Eligibility;