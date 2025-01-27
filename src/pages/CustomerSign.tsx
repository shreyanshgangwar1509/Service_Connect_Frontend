import { IconPlant2, IconArrowLeft } from '@tabler/icons-react';
import  Signup  from '../components/Customer/Signup'
import  Signin  from '../components/Customer/Signin'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';


const CustomerSign = () => {
  const location = useLocation()
  const navigate = useNavigate();
    return <div className={`min-h-[100vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden relative`}>
            <Button className='!absolute m-4 z-10' variant="light" color="yellow" onClick={() => navigate('/home')} leftSection={<IconArrowLeft size={14} />}> Home </Button>

            <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0  ${location.pathname=='/CustomerSignup' ? '-translate-x-1/2' : 'translate-x-0'} `}> 
            <Signin></Signin>

        <div className={`w-1/2 h-full transition-all ease-in-out duration-1000  bg-mine-shaft-900 flex flex-col justify-center items-center ${location.pathname=='/CustomerSignup' ? 'rounded-r-[200px]' : 'rounded-l-[200px]'}`}>

      

       
        <div className=' flex item-center justify-center gap-3  text-amber-400 hover:scale-110 transition-all duration-300'>
         <IconPlant2 stroke={1.8}  className='h-20 w-20 pb-2'/>
          <div className='text-6xl font-semibold '>Service Sphere</div>
         
          </div>

            <div className='text-2xl  text-mine-shaft-200 hover:scale-110 transition-all duration-300'>{location.pathname=='/CustomerSignup' ? 'New here ?' : 'One of us ?'} </div>

          <div className='text-mine-shaft-400 mt-4 hover:scale-110 transition-all duration-300'>
          {location.pathname=='/CustomerSignup' ? 'Join us today! and unlock a world of convenient home services tailored just for you' : 'Welcome back! Sign in to access your personalized home service experience.'}</div>

        </div>

          <Signup></Signup>
        


      </div>
   
</div>
}

export default CustomerSign;