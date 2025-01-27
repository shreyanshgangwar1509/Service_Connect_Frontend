import { Link } from 'react-router-dom';
import { IconPlant2 } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconArrowRightDashed } from '@tabler/icons-react';


const Footer = () => {
  return <div className=' mt-20 h-80 bg-gradient-to-r from-mine-shaft-900 to-mine-shaft-950 text-mine-shaft-100  rounded-tl-[125px] '>

    <div className='flex pl-20 pr-5 pt-10  gap-16 mb-4 '>

      <div className='w-80 flex flex-col gap-6'>

      <div className='flex gap-3 items-center text-amber-400'>
         <IconPlant2 stroke={1.8} className='h-10 w-10'/>
          <div className='text-3xl font-semibold'>Service Sphere</div>
          </div>

        <div className='pl-6 italic hover:text-bright-sun-400 hover:scale-105 transition duration-200'>
        Seamlessly Connecting You with Trusted Service Professionals, Anytime, Anywhere, for All Your Home Needs. Your One-Stop Solution for Home Services
        </div>
      </div>

      <div className='flex flex-col gap-4 hover:scale-105 transition duration-200'>

        <div className='text-mine-shaft-50 hover:text-bright-sun-400'>
            Head Office
            <div className='w-20 mt-2 h-1.5 bg-[#767676] rounded relative overflow-hidden'>
              <span className='w-4 h-1.5 bg-bright-sun-400 rounded absolute animate-moving' ></span>
            </div>
           
        </div>

        <div className='flex flex-col gap-3'>
        <div >
          <div className='hover:text-bright-sun-400'>ITPL Road Whitefieid,</div>
          <div className='hover:text-bright-sun-400'>Bangalore Karnataka,</div>
          <div className='hover:text-bright-sun-400'> PIN 560066, India</div> 
          </div>
        <div className='border-b-[1px] hover:text-bright-sun-400'>ServiceSphere@gmail.com</div>
        <div className='hover:text-bright-sun-400'>+91-7836086508</div>
        </div>
       
      </div>

      <div className='flex flex-col gap-4 hover:scale-105 transition duration-200'>
        <div className='text-mine-shaft-50 hover:text-bright-sun-400'>
            Company
            <div className='w-20 mt-2 h-1.5 bg-[#767676] rounded relative overflow-hidden'>
              <span className='w-4 h-1.5 bg-bright-sun-400 rounded absolute animate-moving'></span>
            </div>
        </div>

        <div className='flex flex-col gap-2'>
        <div className='hover:text-bright-sun-400 '><Link to = '/about'>About Us</Link></div>
        <div className='hover:text-bright-sun-400'><Link to = '/Terms&Conditions'>Terms & Condition</Link></div>
        <div className='hover:text-bright-sun-400'><Link to = '/PrivacyPolicy'>Privacy Policy</Link></div>
        <div className='hover:text-bright-sun-400'><Link to = '/Refund&Cancellation'>Refund & Cancellation Policy</Link></div>
        <div className='hover:text-bright-sun-400'><Link to = '/about'>Careers</Link></div>
        </div>
        
      </div>


      <div className='flex flex-col gap-4 hover:scale-105 transition duration-200'>
        <div className='text-mine-shaft-50 hover:text-bright-sun-400'>
            Support
            <div className='w-16 mt-2 h-1.5 bg-[#767676] rounded relative overflow-hidden'>
              <span className='w-4 h-1.5 bg-bright-sun-400 rounded absolute animate-moving'></span>
            </div>
        </div>

        <div className='flex flex-col gap-2'>
        <div className='hover:text-bright-sun-400'><Link to = '/contact'>Contact Us</Link></div>
        <div className='hover:text-bright-sun-400'><Link to = '/about'>Chat</Link></div>
        <div className='hover:text-bright-sun-400'><Link to = '/about'>FAQ</Link></div>
        </div>
        
      </div>


      <div className='flex flex-col gap-4 hover:scale-105 transition duration-200'>
        <div className='text-mine-shaft-50 hover:text-bright-sun-400'>
            Newsletter
            <div className='w-20 mt-2 h-1.5 bg-[#767676] rounded relative overflow-hidden'>
              <span className='w-4 h-1.5 bg-bright-sun-400 rounded absolute animate-moving'></span>
            </div>
           
        </div>

        <form className="flex justify-between items-center border-b-[1px] mb-8 pb-3">
                <IconMail stroke={2} className='mr-2' />
                <input className="bg-transparent border-0 outline-none w-full" type="email" placeholder="Enter Your email id" required/>
                <button className='ml-2' type="submit"><IconArrowRightDashed stroke={2} /></button>
            </form>


            <div className='flex gap-4'>
              <a className='w-10 h-10 bg-mine-shaft-50 hover:bg-bright-sun-400 rounded-full flex justify-center items-center'>
              <img className='w-6 h-6' src="Social/whatsapp.png" alt="" />
              </a>

              <a className='w-10 h-10 bg-mine-shaft-50  hover:bg-bright-sun-400 rounded-full flex justify-center items-center'>
              <img className='w-6 h-6' src="Social/facebook.png" alt="" />
              </a>

              <a className='w-10 h-10 bg-mine-shaft-50 hover:bg-bright-sun-400  rounded-full flex justify-center items-center' href='https://www.instagram.com/__ritikjainn/'>
              <img className='w-6 h-6' src="Social/instagram.png" alt="" />
              </a>

              <a className='w-10 h-10 bg-mine-shaft-50 hover:bg-bright-sun-400 rounded-full flex justify-center items-center'>
              <img className='w-6 h-6' src="Social/twitter.png" alt="" />
              </a>

              <a className='w-10 h-10 bg-mine-shaft-50 hover:bg-bright-sun-400 rounded-full flex justify-center items-center' href='https://www.linkedin.com/in/ritikjain00/'>
              <img className='w-6 h-6' src="Social/linkedin.png" alt="" />
              </a>
            </div>

          
      </div>

      </div>

      <hr className='w-[90%] m-auto border-b-2' />

      <div className='text-center mt-4 '> Service Sphere Pvt Ltd. Copyright © 2024 - All Rights Reserved </div>
  </div>
}

export default Footer