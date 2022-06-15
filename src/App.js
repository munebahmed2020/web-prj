import LandingPage from "./pages/LandingPage";
import { Routes, Route } from 'react-router-dom';
import ServicesPage from "./pages/ServicesPage";
import DispatchersPage from "./pages/DispatchersPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import Show from "./show";
import Show2 from "./show2";
import Show4 from "./show4";
import Hireform from "./hireform";
import Show5 from "./show5";


function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/dispatchers" element={<DispatchersPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/aboutus" element={<AboutPage/>}/>
          <Route path="show" element={<Show/>}/>
          <Route path="show2" element={<Show2/>}/>
          <Route path="show4" element={<Show4/>}/>
          <Route path="show5" element={<Show5/>}/>
          <Route path="/signup" element={<RegisterPage/>}/>
          <Route path="/hireform" element={<Hireform/>}/>
          

        </Routes>


    </div>
  );
}

export default App;
