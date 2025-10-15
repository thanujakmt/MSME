import React from 'react';

function CancellationPolicy() {
    return (
         <div>
            <div className={` relative`}>
                <div className=" 2xl:h-[700px]">
                    <img src='../src/assets/Bg3.png' className="w-full h-full relative z-1" />
                </div>
                <p className={"text-white md:text-3xl absolute inset-0 flex items-center justify-center z-2"}>Cancellation & Refund Policy</p>
            </div>
            <div className="md:px-[20px]  2xl:px-[150px] py-[20px]">
                <div className='px-10 py-3'>
                    <p className='text-orange-500 text-2xl font-bold pb-2'>Cancellation Policy</p>
                    <p className='text-sm'>We follow a <b>NO CANCELLATION POLICY.</b></p><br />
                    <p className='text-sm'>Any order placed with us can be cancelled only if service delivery from our end is not possible. In cases where delivery from our end is not possible, refunds shall be allowed to the client after deducting internet and handling charges (Approximately: Rs 500/-).</p><br />
                    <p className='text-sm'><b>Note:</b> Non-delivery of services due to any deficiency in documents and/or not providing OTP (One Time Password), or any other shortcoming or non-cooperation from the client side, which renders the delivery of services impossible on our end, shall not be treated as "failure of delivery of services from our end". No refunds shall be available in such cases as there is no lack of performance on our end.</p>
                </div>
                <div className='px-10 py-3'>
                    <p className='text-orange-500 text-2xl font-bold pb-2'>Refund Policy</p>
                    <p className='text-sm'>We follow a <b>NO REFUND POLICY.</b></p><br />
                    <p className='text-sm'>Refunds against any order placed with us can be claimed only if service delivery from our end is not possible. In such cases, refunds shall be allowed to the client after deducting internet and handling charges of Rs 500/-.</p><br />
                    <p className='text-sm'><b>Note:</b> Non-delivery of services on account of any deficiency in documents and/or not providing OTP (One Time Password), or any other shortcoming or non-cooperation from the client side which renders delivery of services impossible on our end, shall not be treated as "failure of delivery of services from our end". Such cases are treated as non-cooperation from the client's end, and no refunds shall be available in such cases as there is no lack of performance on our end.</p>
                </div>
            </div>
        </div>
    );
}

export default CancellationPolicy;