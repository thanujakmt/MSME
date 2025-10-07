
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Registration from './Registration/RegistrationPage';
import ReRegistrationPage from './ReRegistration/ReRegistrationPage';
import CancelRegistrationPage from './CancelRegistration/CancelRegistrationPage';
import ForgetRegistrationPage from './ForgetRegistration/ForgetRegistrationPage';
import PrintCertificatePage from './PrintCertificate/PrintCertificatePage';
import UpdateCertificatePage from './UpdateCertificate/UpdateCertificatePage';
import SampleCertificate from './SampleCertificate';
import UdyogPrintCertificate from './UdyogPrintCertificate/UdyogPrintCertificate';

function Home() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/re-register" element={<ReRegistrationPage />} />
                    <Route path="/cancel" element={<CancelRegistrationPage />} />
                    <Route path="/forgot" element={<ForgetRegistrationPage />} />
                    <Route path="/print" element={<PrintCertificatePage />} />
                    <Route path="/update" element={<UpdateCertificatePage />} />
                    <Route path="/udyog_print" element={<UdyogPrintCertificate />} />
                    <Route path="/sample" element={<SampleCertificate />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default Home;
