
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './App.css'
import Login from './components/Login'
import ForgetPassword from './components/ForgetPassword'
import EmailVerification from './components/EmailVerification'
import OTPVerification from './components/OTPVerification'
import Role from './components/DashboardFiles/Role'
import Admin from './components/DashboardFiles/Admin'
import RolesComponent from './components/RolesComponent/RolesComponent'
function App() {

  return (
    <Router>
      
    <>
    
    <div className='flex w-full'>
    <Sidebar/>
    <div className='flex-1 bg-[#F7FBFD]' >
      <Routes>
     <Route path='/Role' element={<Role/>}/>
     <Route path='/Admin' element={<Admin/>}/>
     </Routes>
    </div>
    <RolesComponent/>
    </div>
   
    <Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
    <Route path='/EmailVerification' element={<EmailVerification/>}/>
    <Route path='/OTPVerification' element={<OTPVerification/>}/>
    </Routes>
    </>
    </Router>
  )
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import './App.css';
// import Login from './components/Login';
// import ForgetPassword from './components/ForgetPassword';
// import Role from './components/DashboardFiles/Role';
// import EmailVerification from './components/EmailVerification';
// import OTPVerification from './components/OTPVerification';

// function App() {
//   return (
//     <Router>
//       <>
//         <div className="flex w-full">
//           <Sidebar />
//           <div className="flex-1">
//             <Role />
//           </div>
//         </div>
//         <Routes>
//           <Route path="/Login" element={<Login />} />
//           <Route path="/ForgetPassword" element={<ForgetPassword />} />
//           <Route path="/EmailVerification" element={<EmailVerification />} />
//           <Route path="/OTPVerification" element={<OTPVerification />} />
//         </Routes>
//       </>
//     </Router>
//   );
// }

// export default App;
