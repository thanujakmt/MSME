function SampleCertificate() {
    return (
        <div className='lg:flex lg:flex-row lg:justify-evenly lg:items-start flex flex-col gap-[20px] px-10 pt-10 pb-8'>
            <div className='flex flex-col border bg-gray-100 mr-5'>
                <span className="bg-blue p-4 block text-white font-bold text-xl">Udyam Registration 2025</span>
                <div className=' px-5 py-5 lg:h-[600px] lg:w-[550px]'>
                    <img src='../src/assets/sample_certificate1.png' className="w-full h-full" />
                </div>
            </div>
            <div className='flex flex-col border bg-gray-100'>
                <span className="bg-blue p-4 block text-white font-bold text-xl">Udyam Registration 2025</span>
                <div className=' px-5 py-5 lg:h-[600px] lg:w-[550px]'>
                    <img src='../src/assets/sample_certificate2.png' className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}

export default SampleCertificate;