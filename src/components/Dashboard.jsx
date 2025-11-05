import MSMEBenifits from './MSMEBenifits';
import OurServices from './OurServices';
import Steps from './Steps';
import Eligibility from './Eligibility';
import FAQ from './FAQ';

function Dashboard() {
  return (
    <div className="w-screen">
        <div className={`w-screen relative`}>
            <img src='../src/assets/BG.jpg' className="w-screen relative z-1" />
            <p className={"text-white text-3xl absolute inset-0 flex items-center justify-center z-2"}>Here is your trusted Business Growth Partner!!</p>
        </div>
        <div className="overflow-hidden shadow-lg w-screen p-6 bg-white flex justify-between">
            <div className='w-230'>
                <p className="text-orange-500 text-2xl font-bold">MSME Registration Portal</p><br/>
                <span>Welcome to India's leading online platform for flexible Udyam Registration.</span><br/>
                <p>Here, we simplify the process where you can concentrate on growing your business while getting <b>special government benifits, save money, and get first access to new opportunities.</b></p><br/>
                <p>So whether it be that you are initiating or growing a business, seeking benifits from government schemes - our portal offers everything you need to complete your MSME Registration at one go and in one place.</p>
            </div>
            <img src='../src/assets/currency.png' className="h-42 w-[200px]" />
        </div>
        <div className={`w-screen relative`}>
            <img src='../src/assets/Bg2.png' className='relative z-1' />
            <div className='absolute inset-0 flex flex-col items-center justify-center z-2'>
                <p className="text-white text-center text-3xl pt-4 font-bold">REGISTER YOUR BUSINESS!!</p>    
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded flex items-center">Udyam Registration 2025 
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