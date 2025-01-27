import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row px-6 lg:px-20">
   

      {/* Left Section (Content) */}
      <div className="flex flex-col items-center mt-6 pt-8 w-full md:w-1/2 gap-8">
        <div className="text-bright-sun-400 text-xl font-bold">
          Very Proud To Introduce
        </div>

        <div className="text-center font-bold text-5xl text-white p-2">
          Home Services At Your <span className="text-bright-sun-500">Doorstep</span>
        </div>

        <div className="text-mine-shaft-100 text-center text-lg">
          Your home's trusted ally. Expert solutions in electrical, plumbing, carpentry, and more. Transparent pricing, skilled professionals, hassle-free bookings. We're here to make your house a home, ensuring every service call brings peace of mind.
        </div>

        <div className="w-48 mt-4">
          <Button fullWidth size="md" variant="filled" color="orange">
            <Link to={`/Explore`}>Explore Services</Link>
          </Button>
        </div>

        <div className="flex gap-16 mt-4 text-lg">
          <div className="flex gap-6">
            <div>
              <img src="Home/starIcon.png" alt="Star Icon" />
            </div>
            <div className="flex flex-col justify-center text-white">
              <div className="text-center">4.7</div>
              <div>Service Rating</div>
            </div>
          </div>

          <div className="flex gap-6">
            <div>
              <img src="Home/group-users.png" alt="Group Users" />
            </div>
            <div className="flex flex-col justify-center text-white">
              <div className="text-center">5M+</div>
              <div>Customers Globally</div>
            </div>
          </div>
        </div>
      </div>
         {/* Image Section (First on Small Screens) */}
         <div className="w-full md:w-1/2">
        <img src="Home/Electritian.png" alt="Electrician" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
