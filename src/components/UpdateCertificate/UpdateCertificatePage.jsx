import React from 'react';
import UpdateCertificateForm from './UpdateCertificateForm';

function UpdateCertificatePage() {
    return (
       <div class='lg:flex lg:flex-row lg:justify-evenly lg:items-start flex flex-col items-center  px-10 pt-10 pb-8'>
            <UpdateCertificateForm />
            <div className='flex flex-col border bg-gray-100 w-75 md:w-115 2xl:w-140'>
                <span class="bg-blue p-4 block text-white font-bold text-xl">Update Udyam Registration Certificate Online 2025</span>
                <div class=' px-5 py-5'>
                    <img src='../src/assets/Update_certificate.png' class="" />
                </div>
            </div>
        </div>
    );
}

export default UpdateCertificatePage;