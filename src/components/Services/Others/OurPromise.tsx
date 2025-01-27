import { IconCheck } from '@tabler/icons-react';

const Promise = () => {

  return <div className="m-4 border-mine-shaft-900 border-2  rounded-xl hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_5px_2px_black] transition duration-300 !shadow-bright-sun-300  p-4 flex flex-col gap-2 items-center ">

    <div className='flex gap-4'>

      <div className='flex flex-col gap-2'>
            <div className='text-mine-shaft-200 text-lg  hover:text-bright-sun-400 '>Our Promise</div>

          <div className='flex gap-2 text-mine-shaft-300  hover:text-bright-sun-400 '>
              <IconCheck stroke={2} />
              <div>Verified Professionals</div>
          </div>

          <div className='flex gap-2 text-mine-shaft-300  hover:text-bright-sun-400 '>
            <IconCheck stroke={2} />
            <div>Hassle Free Booking</div>
         </div>

          <div className='flex gap-2 text-mine-shaft-300  hover:text-bright-sun-400 '>
             <IconCheck stroke={2} />
             <div>Transparent Pricing</div>
         </div>
      </div>

          <div className='flex items-center justify-center'>
            <img className='w-24 h-24' src="/ServicePages/high-quality.png" alt="" />
        </div>
    </div>
   
 

</div>
}

export default Promise;