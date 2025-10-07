import MSMEBenifits from './MSMEBenifits';
import OurServices from './OurServices';
import Steps from './Steps';
import Eligibility from './Eligibility';
import FAQ from './FAQ';

function Dashboard() {
    return (
        <div className="">
            <div className={` relative`}>
                <div className=' 2xl:h-[700px]'>
                    <img src='../src/assets/BG.jpg' className=" relative z-1 w-full h-full" />
                </div>
                <p className={"text-white  2xl:text-3xl absolute inset-0 flex items-center justify-center z-2"}>Here is your trusted Business Growth Partner!!</p>
            </div>
            <div className="  bg-white flex flex-col justify-center items-center md:flex md:flex-row md:justify-evenly py-6">
                <div className=' md:w-[900px] flex flex-col  p-2 '>
                    <p className="text-pale_yellow text-[26px] font-bold ">MSME Registration Portal</p><br />
                    <span className=' text-[16px]'>Welcome to India's leading online platform for flexible Udyam Registration.</span><br />
                    <p className=' text-[16px]'>Here, we simplify the process where you can concentrate on growing your business while getting <b>special government benifits, save money, and get first access to new opportunities.</b></p><br />
                    <p className=' text-[16px]'>So whether it be that you are initiating or growing a business, seeking benifits from government schemes - our portal offers everything you need to complete your MSME Registration at one go and in one place.</p>
                </div>
                <div className=''>
                    <img src='../src/assets/currency.png' className="h-52 w-54 " />
                </div>
            </div>
            <div className={`relative`}>
                <div className=''>
                    <img src='../src/assets/Bg2.png' className=' h-56 relative z-1' />
                </div>
                <div className='absolute inset-0 flex flex-col items-center justify-center z-2'>
                    <p className="text-white text-center text-[20px] 2xl:text-3xl py-4 font-bold">REGISTER YOUR BUSINESS!!</p>
                    <button style={{ backgroundColor: "#ff6900" }} className=" text-white font-bold py-2 px-4 rounded flex items-center">Udyam Registration 2025
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="orange" className="size-4 bg-white ml-3 rounded">
                            <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <MSMEBenifits />
            <OurServices />
            <Eligibility />
            <Steps />
            <FAQ />
        </div>
    );
}

export default Dashboard;