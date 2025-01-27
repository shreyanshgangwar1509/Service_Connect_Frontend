import { IconHeart, IconHeartFilled  } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { Divider } from "@mantine/core"
import { IconMapPin,  IconRecharging,IconBriefcase, IconClock } from "@tabler/icons-react";
import { useCart } from "../../../Context/CartContext";
import {  useEffect,useState } from 'react';

const ServiceCard = (   {job }  : any) => {
  const { addToCart, addToFavorate, removeFromFavorate,  Favorate} = useCart();

  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  useEffect(() => {
    const isFav = Favorate.some((fav) => fav.Id === job.Id);
    setIsFavorited(isFav);
  }, [Favorate, job.Id]);

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
    if (!isFavorited) {
      addToFavorate(job)
    } else {
      removeFromFavorate(job)
    }
  };


  return <div className='  mt-8  p-4  bg-mine-shaft-900 rounded-xl hover:scale-105 hover:shadow-[0_0_5px_2px_black] transition duration-300 !shadow-bright-sun-300'>

    <div className='flex flex-col gap-4'>

      {/* Head Section */}

      <div className="flex justify-between ">
        <div>
          <div className='text-3xl font-semibold text-mine-shaft-300 font-[poppins]'>{job.ServiceName}</div>
          <div className='mt-1'>{job.CompanyName} &#x2022; &#x2B50; 4.26</div>
        </div>
        <div className='mt-2 mr-2' onClick={handleFavoriteToggle}>
          {isFavorited ?  <IconHeartFilled color='red'  stroke={2} size={28} /> : <IconHeart stroke={2} size={28} /> }
          </div> 
         
      </div>


      {/* Feature */}
        <div className='flex gap-8 text-sm'>
            <div className='bg-mine-shaft-800 text-bright-sun-300 rounded-lg px-2 py-1 flex gap-2 w-auto'>
            <IconBriefcase size={20}  stroke={2} />
            <div>{job.Expirence}</div>
               </div>
            <div className='bg-mine-shaft-800 text-bright-sun-300 rounded-lg px-2 py-1 flex gap-2'>
            <IconMapPin size={20} stroke={2} />
            <div>{job.Location}</div>
              </div>
            <div className='bg-mine-shaft-800 text-bright-sun-300 rounded-lg px-2 py-1 flex gap-2'>
            <IconRecharging size={20} stroke={2} />
            <div>{job.Bookings}</div>
            </div>
        </div>
      
      
     {/* Info and image */}
       <div className='flex gap-4'>
          <div className='w-2/3'>{job.Brief}
          </div>

        <div className='flex flex-col gap-2 justify-center items-center'>
           <div><img className='w-32 h-32' src={job.image} alt="" /></div>
           <Button variant="light" color="yellow" radius="md" fullWidth onClick={() => addToCart(job)}>Add</Button>
        </div>
       </div>
  
      <Divider mx="md" color='mine-shaft.7'/>

      {/* Price and Time */}
      <div className='flex justify-between '>
        <div className='font-semibold text-xl text-mine-shaft-200'>&#8377; {job.Price}</div>
        <div className='flex gap-1 items-center text-sm text-mine-shaft-300'><IconClock size={20} stroke={2} /> {job.Time}</div>
      </div>

    </div>
  </div>
}

export default ServiceCard