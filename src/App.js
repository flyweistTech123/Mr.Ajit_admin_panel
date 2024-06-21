import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Newpassword from './Pages/Login/Newpassword';
import Verification from './Pages/Login/Verification';
import Verificationcode from './Pages/Login/Verificationcode';
import Dashboard from './Pages/Dashboard/Dashboard';
import TotalUsers from './Pages/Total Users/TotalUsers';
import KYC from './Pages/KYC/KYC';
import Payment from './Pages/Payment/Payment';
import Wallet from './Pages/Wallet/Wallet';
import Notifications from './Pages/Push Notification/Notifications';
import ShopkeeperReport from './Pages/Shopkeeper Report/ShopkeeperReport';
import FraudCustomer from './Pages/Fraud Customer/FraudCustomer';
import Settings from './Pages/Settings/Settings';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/newpassword" element={<Newpassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/verificationcode" element={<Verificationcode />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<TotalUsers />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/shopkeeper_report" element={<ShopkeeperReport />} />
          <Route path="/fraud_customer" element={<FraudCustomer />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
