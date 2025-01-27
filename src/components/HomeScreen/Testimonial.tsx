import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Rating } from '@mantine/core';

const Testimonial = () => {

  const autoplay = useRef(Autoplay({ delay: 2000}));

  const review = [
    {
      name: "Jyotika Sharma",
      city: "New Delhi, India",
      heading: "Outstanding Electrical Service: Impressive Work by Service Sphere",
      rev: "I recently used Service Sphere for electrical work at home, and I was thoroughly impressed. The electricians were prompt, professional, and efficient. They fixed the issue quickly and offered valuable safety tips. Their attention to detail and friendly attitude stood out. Highly recommend!",
      avatar: "/Model/model1.jpg",
      rating: 4.5
    },
    {
      name: "Keshav Yadav",
      city: "Mumbai, India",
      heading: "Superior Service: Craftsmanship That Speaks for Itself",
      rev: "The carpenter service was outstanding! They crafted custom furniture with exceptional attention to detail. The team was punctual, professional, and exceeded my expectations. I highly recommend their services for any carpentry needs!",
      avatar: "/Model/model2.jpg",
      rating: 4
    },
    {
      name: "Rahul Kashyap",
      city: "Bangalore, India",
      heading: " Exceptional Pest Control Service: Say Goodbye to Pests with Expert Care",
      rev: "The pest control service was exceptional! They swiftly addressed the issue and ensured our home was pest-free. The team was professional, knowledgeable, and provided valuable tips for long-term prevention. Highly recommend their reliable and efficient service!",
      avatar: "/Model/model3.jpg",
      rating: 5
    },
    {
      name: "Tanya Aggarwal",
      city: "Hyderabad, India",
      heading: "Exceptional Home Renovation: Trustworthy Contractor Service",
      rev: "We hired a contractor service for our home renovation, and it was a fantastic experience. They were professional, detail-oriented, and delivered exceptional craftsmanship. The final outcome exceeded our expectations—highly recommend!",
      avatar: "/Model/model4.jpg",
      rating: 3.5
    },
    {
      name: "Shreya Jain",
      city: "Kolkata, India",
      heading: "Vibrant Transformations: Expert Painter Service",
      rev: "Engaging the painter service for our home makeover was a game-changer. They were professional, detail-oriented, and delivered impressive results. The final outcome surpassed our expectations—highly recommend their top-notch service!",
      avatar: "/Model/model8.jpg",
      rating: 4.5
    },
    {
      name: "Gaurav Singh",
      city: "Chennai, India",
      heading: "Dependable Plumbing Solutions: Trusted Plumbers for Your Every Need",
      rev: "The plumber service was exceptional! They arrived promptly, fixed the issue efficiently, and explained the problem in detail. Their professionalism and expertise were impressive. I highly recommend their reliable service for any plumbing needs",
      avatar: "/Model/model9.jpg",
      rating: 4
    },
    {
      name: "Mehak Yadav",
      city: "Guwhati, India",
      heading: "Transform Your Home with Expert Housekeeping",
      rev: "The housekeeping service was incredible! The team was thorough, efficient, and left every room spotless. Their attention to detail and friendly approach made the experience even better. I highly recommend their services for a truly clean home!",
      avatar: "/Model/model10.jpg",
      rating: 5
    },
    {
      name: "Aryan Kapoor",
      city: "Jaipur, India",
      heading: "Seamless Appliance Solutions: Expert Technician Service.",
      rev: "Engaging the appliance technician service was a game-changer. They were prompt, efficient, and tackled every issue with skill. Their professionalism and attention to detail ensured our appliances were fixed quickly. Highly recommend for any appliance repair needs!",
      avatar: "/Model/model6.jpg",
      rating: 4.5
    },
  ]

  return <div className="mt-24 mx-16">

    <div className="text-4xl font-bold text-mine-shaft-100 text-center mb-6">Love From Our <span className="text-bright-sun-500">Past</span> Customers</div>

   <div>

   <Carousel slideSize="22%" align='center' slideGap="md" className='px-16 ' dragFree controlSize={30}  loop 
   nextControlIcon={<IconArrowRight className='h-6 w-6 ' />}
   previousControlIcon={<IconArrowLeft className='h-6 w-6' />}
   plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}>
    
    { review.map((item , index) => <Carousel.Slide key={index}>
    
      <div className=" flex flex-col  justify-around border-bright-sun-300 rounded-xl hover:cursor-pointer hover:scale-105 hover:bg-bright-sun-950 hover:shadow-[0_0_5px_2px_black] transition duration-300 !shadow-bright-sun-300  border-2 w-96 mx-8 my-4 mt-12 gap-2 p-4 items-center ">


      <div className='flex gap-5'>

      <div className='w-16 h-16 '>
        <img className='rounded-full' src={item.avatar} alt="" />
      </div>

      <div className='flex flex-col justify-center text-mine-shaft-100 '>
        <div>{item.name}</div>
        <div>{item.city}</div>
      </div>

      <div className='flex items-center justify-center'>
      <Rating value={item.rating} fractions={2} readOnly size="md" />;
      </div>

     </div>


    <div className='mt-2 flex flex-col gap-2'>
    <div className='text-lg text-bright-sun-300'>
      {item.heading}
     </div>

     <div className='text-mine-shaft-200'>
      {item.rev}
     </div>

    </div>
     
       
      </div>

      </Carousel.Slide> 
      )}
    </Carousel>
   </div>

   </div>



  
}

export default Testimonial;