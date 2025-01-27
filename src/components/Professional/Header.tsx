
import { IconBellRinging } from '@tabler/icons-react';


import { Indicator } from '@mantine/core';
import MenuItem from '../Customer/Header/MenuItem';




const Header = () => {

    return(
      <div className="w-full h-24 px-6  bg-mine-shaft-950 flex justify-end items-center  text-cyan-50 ">

          <div className='flex gap-4 items-center'>
              <MenuItem></MenuItem>

               <Indicator inline processing color="red"  offset={6} size={8}>
               <div className='p-2 rounded-full bg-mine-shaft-900 cursor-pointer'>  
                    <IconBellRinging stroke={2} />
               </div>
               </Indicator>

         
         
            
            </div>
      </div>
     
 
    ) 
}

export default Header;