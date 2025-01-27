// Service Card Section

import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';



const Services = () => {

  const autoplay = useRef(Autoplay({ delay: 2000}));

  const Service = [{
    name: 'Carpenter',
    description: "Our carpenter service delivers top-notch craftsmanship for all woodworking projects. From custom furniture to renovations, our skilled team brings precision and creativity, enhancing your living spaces"
  },
  {
    name: 'Painter',
    description: "Renew your home with our professional house painting service. We offer expert color consultations, quality materials, and flawless finishes, ensuring stunning, long-lasting results for both interiors and exteriors"
  },
  {
    name: 'Electrician',
    description: "Our electrician service offers expert solutions for all your electrical needs. From installations to repairs, our skilled professionals ensure safety and efficiency, providing peace of mind for your home "
  },
  {
    name: 'Contractor',
    description: "Realizing dreams, our contracting service delivers expert solutions for home projects. With a skilled team dedicated to quality, we bring your vision to life with personalized attention and timely completion "
  },
  {
    name: 'Plumber',
    description: "Catering to your plumbing needs, our service excels in installations and repairs. Our adept team guarantees swift solutions, ensuring seamless water systems to keep your home running smoothly" 
  },

  {
    name: 'Technician',
    description: "Trust our skilled appliance technicians to keep your household running smoothly.With expertise in repair, maintenance, and installation,We ensure your appliances perform optimally,saving time and hassle" 
  },

  {
    name: 'PestControl',
    description: "Trust our skilled pest control technicians to keep your home and business pest-free. With expertise in pest elimination, prevention, and management, we ensure your property remains safe and comfortable, saving you time and stress" 
  },

  {
    name: 'HouseKeeping',
    description: "Trust our skilled house cleaning professionals to keep your home spotless. With expertise in deep cleaning and maintenance, we ensure your space remains fresh and organized, saving you time and effort." 
  }
]
  return <div className="mt-20 mx-10">

<div className="text-4xl font-bold text-mine-shaft-100 text-center mb-6">What Are You <span className="text-bright-sun-500">Looking </span>For</div>


<div className="text-lg text-mine-shaft-300 text-center w-7/12 mx-auto">
  <div>Experience world-class household services with our reliable, skilled, and always-on-time experts</div>
  <div>we ensure your home gets the care it deserves!</div>
</div>



<div className="">

<Carousel slideSize="22%" align='center' slideGap="md" className='px-16 ' dragFree controlSize={30}  loop 
   nextControlIcon={<IconArrowRight className='h-6 w-6 ' />}
   previousControlIcon={<IconArrowLeft className='h-6 w-6' />}
   plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}>
    
     {Service.map((service, index) => <Carousel.Slide key={index} 
     >

      <div className=" flex flex-col items-center justify-around border-bright-sun-300 rounded-xl hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_5px_2px_black] transition duration-300 !shadow-bright-sun-300  border-2 w-80 mx-8 my-4 mt-12 gap-2 p-4  ">
        
      <div className='rounded-full bg-bright-sun-500'>
      <img className="w-28 h-28  " src={`ServicesCards/${service.name}.png`} alt="services" />
        </div>
      <div className="text-xl font-semibold  text-center text-amber-300">{service.name}</div>

      <div className='text-center  text-mine-shaft-200 my-2'>
        {service.description}
      </div>

      <div className=''>
      <Button variant="filled" color="orange" radius="md"
      ><Link to = {`/${service.name}`}>View More</Link> </Button>

      </div>
      </div>
    

      </Carousel.Slide> 
      )}
    </Carousel>


</div>
 
  </div>
}

export default Services;