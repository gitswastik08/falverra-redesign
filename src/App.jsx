import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import ServicePage from "./pages/ServicePage/ServicePage";
import PricingPage from "./pages/PricingPage/PricingPage";
import Contact from "./pages/Contact/Contact";
import Payment from "./pages/Payment/Payment";
import Thankyou from "./pages/ThankyouPage/Thankyou";
import ResultDelivery from "./pages/Result-delivery/ResultDelivery";
import ServiceDetail from "./pages/ServiceDetailPage/ServiceDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/result-delivery" element={<ResultDelivery />} />
        <Route path="/service-details" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
