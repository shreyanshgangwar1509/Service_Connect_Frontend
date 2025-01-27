import { Notifications } from '@mantine/notifications';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../Context/CartContext';
import { ProfileProvider } from '../Context/ProfileContext';

import ScrollToTop from "../components/Scroll";


import Home from '../pages/Home'
import About from '../pages/About';
import Contact from '../pages/Contact';
import Explore from '../pages/Explore';
import Professional from '../pages/Professional';
import Electrician from '../pages/Electrician';
import Carpenter from '../pages/Carpenter';
import Painter from '../pages/Painter';
import Plumber from '../pages/Plumber';
import PestControl from '../pages/PestControl';
import HouseKeeping from '../pages/HouseKeeping';
import Contractor from '../pages/Contractor';
import Technician from '../pages/Technician';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import Refund from '../pages/Refund';
import CustomerSign from '../pages/CustomerSign';
import CustomerProfile from '../pages/CustomerProfile';
import CartPage from '../pages/CartPage';
import Favorate from '../pages/Favorates';
import DashBoard from '../pages/Partner/Dashboard';

const AppRoutes = () => {
  return <div>
         <BrowserRouter>
        <ScrollToTop />
        <ProfileProvider>
        <CartProvider>
          
        <Notifications />
        <Routes>
     <Route path='*' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/professional' element={<Professional/>}></Route>
          <Route path='/Explore' element={<Explore/>}></Route>
          <Route path='/Electrician' element={<Electrician/>}></Route>
          <Route path='/Carpenter' element={<Carpenter/>}></Route>
          <Route path='/Painter' element={<Painter/>}></Route>
          <Route path='/Plumber' element={<Plumber/>}></Route>
          <Route path='/PestControl' element={<PestControl/>}></Route>
          <Route path='/HouseKeeping' element={<HouseKeeping/>}></Route>
          <Route path='/Contractor' element={<Contractor/>}></Route>
          <Route path='/Technician' element={<Technician/>}></Route>
          <Route path='/PrivacyPolicy' element={<Privacy/>}></Route>
          <Route path='/Terms&Conditions' element={<Terms/>}></Route>
          <Route path='/Refund&Cancellation' element={<Refund/>}></Route>
          <Route path='/CustomerSignup' element={<CustomerSign/>}></Route>
          <Route path='/CustomerLogin' element={<CustomerSign/>}></Route>
          <Route path='/ProfessionalSignup' element={<Professional/>}></Route>
          <Route path='/ProfessionalLogin' element={<Professional/>}></Route>
          <Route path='/CustomerProfile' element={<CustomerProfile/>}></Route>
          <Route path='/Cart' element={<CartPage/>}></Route>
          <Route path='/Favorate' element={<Favorate/>}></Route>
          <Route path='/DashBoard' element={<DashBoard/>}></Route>
          </Routes>
        </CartProvider>
        </ProfileProvider>
        </BrowserRouter>

  </div>
}

export default AppRoutes