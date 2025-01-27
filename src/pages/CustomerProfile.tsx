import Header from "../components/Customer/Header/Header";
import Footer from "../components/Footer";
import { Divider } from '@mantine/core';

import ProfileDetail from "../components/Customer/Profile/ProfileDetail";


const CustomerProfile = () => {
  return <div className="min-h-[100vh] font-['poppins'] bg-mine-shaft-950  ">
   <Header></Header>
   <Divider mx="md" mb='xl' />


   <div className="mx-32">
      
      {/*   Image Section */}

        <div  className="w-full relative">
          <img className='rounded-t-2xl w-full ' src="/Profile/ServiceSphereBanner.png" alt="" />
          <img className="w-48 h-48 rounded-full absolute -bottom-24 left-4 border-mine-shaft-900 border-8" src="/Home/avatar-9.png" alt="" />
        </div>

        {/* Basic Detail */}
       
        <ProfileDetail></ProfileDetail>
     

    
    
    
  
      
  </div>

  
  <Footer></Footer>

  </div>


}

export default CustomerProfile;