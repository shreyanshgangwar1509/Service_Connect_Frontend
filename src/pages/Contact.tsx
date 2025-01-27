import Header from "../components/Customer/Header/Header";
import Footer from "../components/Footer";
import { Button } from '@mantine/core';

const Contact = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950">
         <Header></Header>


         <div className="w-full h-full flex justify-center items-end mt-8 ">

              <div className="flex bg-mine-shaft-900 border-rounded p-8 gap-16 rounded-lg hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-300 border-2 border-mine-shaft-700">

                  <div className="flex flex-col gap-4">
                     <div className="text-bright-sun-400 text-4xl font-bold ">Get In Touch</div>
                     <div className="text-mine-shaft-400">We are here for you! How can we help</div>


                    <div className="flex flex-col gap-2 mt-2">
                     <label className="text-mine-shaft-100" htmlFor="name">Your Name <span className='text-red-500'>*</span></label>
                     <input className="bg-mine-shaft-800 p-1 pl-2 border-0 outline-none text-mine-shaft-200" name='name' type="text"  placeholder="Ritik Jain"/>
                      </div>

                       <div className="flex flex-col gap-2">
                         <label className="text-mine-shaft-100" htmlFor="email">Your Email <span className='text-red-500'>*</span></label>
                         <input className="bg-mine-shaft-800 p-1 pl-2 border-0 outline-none text-mine-shaft-200" name='email' type="email"  placeholder="ritikjain123@gmail.com"/>
                       </div>

                       <div className="flex flex-col gap-2">
                         <label className="text-mine-shaft-100"  htmlFor="message">Your Message <span className='text-red-500'>*</span></label>
                         <textarea className="bg-mine-shaft-800 w-96 h-40 p-1 pl-2 s border-0 outline-none text-mine-shaft-200" name="message"   id=""  placeholder="Enter Your Message"></textarea>
                       </div>

                     <div className='w-96  mt-4'>

                         <Button  fullWidth  size='md'variant="filled" color="orange">
                              Submit
                                </Button>
                              </div>
      
                 </div>
  
        <div>
             <div>
                <img className='w-auto h-72' src="Contact/contactUs.jpg" alt="" />
             </div>

             <div className="flex flex-col gap-6 mt-12 ml-8">

                <div className="flex gap-4">
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex justify-center items-center">
                    <img className="w-8 h-8" src="Contact/maps.png" alt="" />
                  </div>

                  <div className="items-center">
                    <div className="text-mine-shaft-400 ">
                    ITPL Road Whitefieid, Bangalore 
                    </div>
                    <div className="text-mine-shaft-400"> Karnataka, PIN 560066, India</div>
                  </div>
          
               </div>

               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex justify-center items-center">
                   <img className="w-8 h-8" src="Contact/phone.png" alt="" />
                 </div>
                 <div className="text-mine-shaft-400 flex items-center justify-center">+91-7836086508
                 </div>
               </div>

               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex justify-center items-center">
                   <img className="w-8 h-8" src="Contact/mail.png" alt="" />
                 </div>
                 <div className="text-mine-shaft-400 flex items-center justify-center">ServiceSphere@gmail.com
                 </div>
               </div>

        
             </div>
          </div>
        
        </div>
        <div className="w-12 bg-bright-sun-400 flex flex-col gap-2 justify-center items-center p-2 pb-4  rounded-br-3xl"> 
        <div><a href=""><img className="w-8 h-8" src="Social/whatsapp.png" alt="" /></a></div>
        <div> <a href=""><img className="w-8 h-8" src="Social/facebook.png" alt="" /></a></div>
        <div><a href="https://www.instagram.com/__ritikjainn/"> <img className="w-8 h-8" src="Social/instagram.png" alt="" /></a> </div>
        <div> <a href=""> <img className="w-8 h-8"  src="Social/twitter.png" alt="" /></a></div>
        <div><a href="https://www.linkedin.com/in/ritikjain00/"> <img className="w-8 h-8" src="Social/linkedin.png" alt="" /></a> </div>
        
        </div>
      </div>

       
         
        
         <Footer></Footer>
    </div>
     

  )
}
export default Contact;