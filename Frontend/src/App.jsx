import { HomePage } from './Pages/HomePage'
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Navbar } from './component/Navbar'
import { AboutPage } from './Pages/AboutPage'
import { AcadamicPage } from './Pages/AcadamicPage'
import { ContactUsPage } from './Pages/ContactUsPage'
import { Signin } from './Pages/Signin'
import  ForgetPassword  from './Pages/ForgetPassword'
import {Class9}   from './Pages/Class9Page'
import {Class10}   from './Pages/Class10Page'
import {Class11}   from './Pages/Class11Page'
import {Class12}   from './Pages/Class12Page'
import { Signup } from './Pages/Signup'
import {Loader} from './Pages/Loader'
import { Signout } from './Pages/Signout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './component/Footer'
import { useDispatch } from 'react-redux'
import { setValue } from './store/booleanSlice'
import { JeePage } from './Pages/JeePage'
import { NeetPage } from './Pages/NeetPage'
import useScrollToTop from './hooks/useScrollToTop'
import { Dashboard } from './Pages/Dashboard'
import { ProtectedRoute } from './component/ProtectedRoute'
import { OTPVerification } from './Pages/OtpVerification'
import ResetPassword from './Pages/ResetPassword'
//import ForgetPassword from './Pages/ForgetPassword'
import PasswordResetRedirect from './component/PasswordResetRedirect'
import { useEffect } from 'react'
import { isTokenValid } from './utils/auth'
import { Team } from './Pages/Team'

function App() {
    useScrollToTop();
    const dispatch=useDispatch();

    useEffect(()=>{
      const token=localStorage.getItem('Token');
      if(!token){
        dispatch(setValue(false));
      }
      else{
        const isValid=isTokenValid();
        dispatch(setValue(isValid));
      }
    },[dispatch]);
  return (
      <div className='w-screen min-h-screen bg-cover bg-center bg-no-repeat'>
        <div className='bg-black flex justify-center sticky top-0 w-screen'>
          <Navbar/>
        </div>
        <div className=''>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/academic" element={<AcadamicPage/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signout" element={<Signout/>} />
        <Route path="/forgetPassword" element={<ForgetPassword/>} />
        <Route path="/reset-password/:token" element={<ResetPassword/>} />
        <Route path="/reset-link/:token" element={<PasswordResetRedirect/>} />
        <Route path="/comingSoon" element={<Loader/>} />
        <Route path="academic/class9" element={<ProtectedRoute children={<Class9/>}/>} />
        <Route path="academic/class10" element={<ProtectedRoute children={<Class10/>}/>} />
        <Route path="academic/class11" element={<ProtectedRoute children={<Class11/>}/>} />
        <Route path="academic/class12" element={<ProtectedRoute children={<Class12/>}/>} />
        <Route path="academic/Jee" element={<ProtectedRoute children={<JeePage/>}/>} />
        <Route path="academic/Neet" element={<ProtectedRoute children={<NeetPage/>}/>} />
        <Route path="/dashboard" element={<ProtectedRoute children={<Dashboard/>}/>} />
        <Route path="/verify-otp" element={<OTPVerification/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="*" element={<div>Not found Page</div>} />
      </Routes>
      </div>
      <ToastContainer />
      <Footer/>
      </div>
  )
}

export default App
