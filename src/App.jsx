import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react'; // Import lazy and Suspense
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import NotFound from "./NotFound";
import "./App.css"
// Lazy load your components
const LazyIntro = lazy(() => import('./components/Intro/Intro'));
const LazyAbout = lazy(() => import('./components/About/About'));
const LazyService = lazy(() => import('./components/Service/Service'));
const LazyBefore = lazy(() => import('./components/BeforeAfterGallery/Before'));
const LazyTestimonial = lazy(() => import('./components/Testimonial/Testimonial'));
const LazyContact = lazy(() => import('./components/Contact/Contact'));
const LazyLocation = lazy(() => import('./components/Location/Location'));
const LazyLogin = lazy(() => import('./components/UserAction/Login/Login'));
const LazyRegister = lazy(() => import('./components/UserAction/Register/Register'));
const LazyShowService = lazy(() => import('./components/Service/ShowService'));
const LazyProfile = lazy(() => import('./components/UserAction/Profile/Profile'));
const LazyAppointment = lazy(() => import('./components/Appoinment/Appointment'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div><p className="loading-message">Please wait while loading...</p></div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div ><p className="loading-message">Please wait while loading...</p></div>}>
        <Routes>
          <Route path="/" element={<>
            <LazyIntro />
            <LazyAbout />
            <LazyService />
            <LazyBefore />
            <LazyTestimonial />
            <LazyContact />
            <LazyLocation />
          </>} />
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/register" element={<LazyRegister />} />
          <Route path="/show_service/:service_id" element={<LazyShowService />} />
          <Route path="/profile" element={<LazyProfile />} />
          <Route path="/appointment" element={<LazyAppointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div className="loading-message"><p className="loading-message">Please wait while loading...</p></div>}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
