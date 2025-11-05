import React from 'react';
import UpdateCertificateForm from './UpdateCertificateForm';

function UpdateCertificatePage() {
    return (
       <div class='flex justify-between items-start px-10 pt-10 pb-8'>
            <UpdateCertificateForm />
            <div className='flex flex-col border bg-gray-100'>
                <span class="bg-blue p-4 block text-white font-bold text-xl">Update Udyam Registration Certificate Online 2025</span>
                <div class=' px-5 py-5'>
                    <img src='../src/assets/Update_certificate.png' class="w-140" />
                </div>
            </div>
        </div>
    );
}

export default UpdateCertificatePage;