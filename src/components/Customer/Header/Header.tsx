import { IconPlant2, IconShoppingCart } from '@tabler/icons-react';
import { IconBellRinging } from '@tabler/icons-react';

import { IconMapPin } from '@tabler/icons-react';
import { Indicator } from '@mantine/core';
import Navlinks from './Navlinks';
import MenuItem from './MenuItem';
import { useCart } from '../../../Context/CartContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  
  const  { cart }  = useCart();
  const navigate = useNavigate();
    return(
      <div className="w-full h-24 px-6  bg-mine-shaft-950 flex justify-between items-center  text-cyan-50 ">

        {/* Logo */}
         <div className='flex gap-3 items-center text-amber-400'>
         <IconPlant2 stroke={1.8} className='h-10 w-10'/>
          <div className='text-2xl font-semibold'>Service Sphere</div>
          </div>

          {/* Navbar */}
          <div className='hidden md:flex gap-8  text-mine-shaft-300 h-full  items-center'>
          <Navlinks></Navlinks>
          </div>


          {/* Location */}
          <div className='hidden lg:flex gap-3 p-2 w-48 h-8 rounded items-center cursor-pointer text-mine-shaft-300 '>
          <IconMapPin stroke={2} />
          <div>Location</div>
            </div>

            
          
            


          {/* Profile, cart, notification */}
          <div className='flex gap-4 items-center'>
              <MenuItem></MenuItem>

               <Indicator inline processing color="red"  offset={6} size={8}>
               <div className='p-2 rounded-full bg-mine-shaft-900 cursor-pointer'>  
                    <IconBellRinging stroke={2} />
               </div>
               </Indicator>

               <Indicator label={cart.length} size={20} color="bright-sun.7" offset={6}>
                   <div onClick={() => navigate('/Cart')} className='p-2 rounded-full bg-mine-shaft-900 cursor-pointer'>
                   <IconShoppingCart stroke={2} />
                  
                   </div>
                  </Indicator>
         
            
            </div>
      </div>
     
 
    ) 
}

export default Header;