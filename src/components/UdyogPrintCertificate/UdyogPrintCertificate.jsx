import UdyogCertificateForm from "./UdyogCertificateForm";

function UdyogPrintCertificate() {
    return (
        <div class='flex justify-between items-start px-10 pt-10 pb-8'>
            <UdyogCertificateForm />
            <div className='flex flex-col border bg-gray-100'>
                <span class="bg-blue p-4 block text-white font-bold text-xl">Print Udyog Aadhar Certificate 2025</span>
                <div class=' px-5 py-5'>
                    <img src='../src/assets/udyog_certificate.png' class="w-140" />
                </div>
            </div>
        </div>
    );
}

export default UdyogPrintCertificate;