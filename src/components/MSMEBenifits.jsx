function MSMEBenifits() {
    return (
        <div className=" py-8 bg-white">
            <div className="flex justify-evenly py-4 text-[15px] 2xl:text-[16px] px-2">
                <div className="">
                    <div className=" py-4">
                        <span className="text-pale_yellow 2xl:text-[26px] text-[22px] py-5 font-bold">Benefits of MSME Registration</span><br />
                        <span className=" py-4 text-[16px]">(For - Micro, Small, and Medium Enterprises)</span><br />
                    </div>
                    <div className=" flex flex-col xl:flex xl:flex-row gap-[30px]">
                        <ul className="list-disc  2xl:w-[700px]">
                            <li className=" text-blue"><span className=" text-black">To reduce business expenses you will get - Government subsidies and incentives.</span></li>
                            <li className=" text-blue"><span className=" text-black">For growth opportunities you will get - Priority access to government tenders.</span></li>
                            <li className=" text-blue"><span className=" text-black">For low interest rates - Collateral free bank loans.</span></li>
                        </ul>
                        <ul className="list-disc 2xl:w-[700px]">
                            <li className=" text-blue"><span className=" text-black">To boost credibility you will get - ISO certification.</span></li>
                            <li className=" text-blue"><span className=" text-black">For streamline procedure you will get - Faster approvals for licence and registrations.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MSMEBenifits;