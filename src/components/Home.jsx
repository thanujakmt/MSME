import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Registration from './Registration/RegistrationPage';
import ReRegistrationPage from './ReRegistration/ReRegistrationPage';
import CancelRegistrationPage from './CancelRegistration/CancelRegistrationPage';
import ForgetRegistrationPage from './ForgetRegistration/ForgetRegistrationPage';
import PrintCertificatePage from './PrintCertificate/PrintCertificatePage';

function Home() {
    return (
        <div className=' flex flex-col min-h-screen '>
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
                        {/* <Route path="/re-register" element={<ReRegistrationPage />} />
                    <Route path="/cancel" element={<CancelRegistrationPage />} />
                    <Route path="/forgot" element={<ForgetRegistrationPage />} /> */}
                    </Routes>
                    <Footer />
                </Router>
            </>
        </div>

    );
}

export default Home;