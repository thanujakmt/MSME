import { useState } from "react";

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const data = [
        {
            title: 'How long does it take to get the certificate?',
            content: 'Within 3-5 working days, one will get the certificate. Typically, after document verification and government filing.',
        },
        {
            title: 'Is MSME Registration necessary or mandatory?',
            content: "No it is not mandatory or necessary. However, it is highly recommended to unlock exclusive government benefits and schemes.",
        },
        {
            title: 'Can I update or correct my certificate later?',
            content: 'Yes, we offer a correction and update services window to keep your MSME account information updated.',
        },
        {
            title: 'Is the registration valid for a lifetime?',
            content: 'Yes, Udyam Registration is valid for a lifetime unless it is cancelled or altered due to major changes.',
        },
    ];

    return (
        <div className=" bg-white px-[20px]  2xl:px-[150px] py-[20px]">
            <span className="text-pale_yellow text-2xl py-5 font-bold">Why is the MSME Registration Portal the best choice for you?</span>
            <div className="flex px-5 pb-5 pt-2">
                <ul className="list-disc">
                    <li className="text-xl text-blue"><span className="text-sm text-black">We protect your data with 100% Secure Processing</span></li>
                    <li className="text-xl text-blue"><span className="text-sm text-black">Budget-Friendly Registration Fees</span></li>
                    <li className="text-xl text-blue"><span className="text-sm text-black">Easy and fast approval without delays</span></li>
                </ul>
            </div>
            <p className="text-pale_yellow text-2xl py-5 font-bold">Frequently Asked Questions</p>
            <div className="w-200 bg-white rounded-md ml-5">
                {data.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (

                        <div className="">
                            <div className=" my-4 py-2 shadow-xl border border-gray-200">
                                <button
                                    className="w-full flex justify-between items-center px-4 py-1 text-left focus:outline-none"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                >
                                    <span className="font-medium">{item?.title}</span>
                                    <svg className={`w-5 h-5 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                            {isOpen && (
                                <div className="px-4 pb-4 text-gray-600">
                                    {item?.content}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            <p className="text-pale-yellow text-2xl pt-5 font-bold">We are ready to help you!!!</p>
            <div className="pt-2">
                <span >Contact Us On -</span>
                <ul className="list-disc px-5 pb-5">
                    <li className="text-sm">Email - <a href="udyamcareinfo@gmail.com" className="text-blue-300 underline">udyamcareinfo@gmail.com</a></li>
                    <li className="text-sm">Our Website - <a href="www.msmeregistration.in" target="_blank" className="text-blue-300 underline">www.msmeregistration.in</a></li>
                </ul>
                <p>You can join 1000+ successful Indian Entrepreneurs who have already been enrolled in the power of MSME Registration Platform. Do not miss this chance to get ahead of the curve. <b>All of these are just a few clicks away!</b></p>
                <p className="py-5"><b>Hurry up!</b> Don't miss the chance for this extensive government schemes, financial advantages, and opportunities to grow business that come with official MSME status.</p>
                <p className="py-5">Our aim is to ensure you that your registration process will be smooth, secure and successful.</p>
                <p>So take your step to expand your business today because your success story starts from now!</p>
                <p><b>ACT NOW, GROW AHEAD, GROW FASTER!</b></p>
                <p className="text-sm"><b>Register Now</b> : <a href="http://msmeregistration.in" target="_blank" className="text-blue-300 underline">MSMERegistration.in</a> with your growth partner!</p>            </div>
        </div>
    );
}

export default FAQ;