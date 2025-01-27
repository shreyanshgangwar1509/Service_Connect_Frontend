import Relevance from "../Fiters/Relevance";
import ServiceCard from "./ServiceCard";
import { useLocation } from "react-router-dom";



const Jobs = () => {


  const location = useLocation();
  const ServiceType = location.pathname.slice(1);

  const Data = [
    {
      Id: 1,
      ServiceName: 'Almirah Cubord Service',
      CompanyName: 'Jain Carpentry',
      image: '/ServicePages/carpenter.png',
      ServiceType: ServiceType,
      Expirence: '5+ Years',
      Location: 'Bangalore',
      Bookings: '1k+ Bookings',
      Brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto enim corporis iure iusto, quas ad, minima a fugit quibusdam nostrum nesciunt nemo adipisci saepe ullam provident cum optio molestias!',
      Price: '2200',
      Time: '12 days Ago'
    },

    {
      Id: 2,
      ServiceName: 'Table Chair Service',
      CompanyName: 'Jain Carpentry',
      image: '/ServicePages/carpenter.png',
      ServiceType: ServiceType,
      Expirence: '5+ Years',
      Location: 'Bangalore',
      Bookings: '1k+ Bookings',
      Brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto enim corporis iure iusto, quas ad, minima a fugit quibusdam nostrum nesciunt nemo adipisci saepe ullam provident cum optio molestias!',
      Price: '500',
      Time: '12 days Ago'
    },

    {
      Id: 3,
      ServiceName: 'Bed Dinnig Service',
      CompanyName: 'Jain Carpentry',
      image: '/ServicePages/carpenter.png',
      ServiceType: ServiceType,
      Expirence: '5+ Years',
      Location: 'Bangalore',
      Bookings: '1k+ Bookings',
      Brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto enim corporis iure iusto, quas ad, minima a fugit quibusdam nostrum nesciunt nemo adipisci saepe ullam provident cum optio molestias!',
      Price: '5000',
      Time: '12 days Ago'
    },

    {
      Id: 4,
      ServiceName: 'Almirah Cubord Service',
      CompanyName: 'Jain Carpentry',
      image: '/ServicePages/carpenter.png',
      ServiceType: ServiceType,
      Expirence: '5+ Years',
      Location: 'Bangalore',
      Bookings: '1k+ Bookings',
      Brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto enim corporis iure iusto, quas ad, minima a fugit quibusdam nostrum nesciunt nemo adipisci saepe ullam provident cum optio molestias!',
      Price: '2200',
      Time: '12 days Ago'
    },

    {
      Id: 5,
      ServiceName: 'Almirah Cubord Service',
      CompanyName: 'Jain Carpentry',
      image: '/ServicePages/carpenter.png',
      ServiceType: ServiceType,
      Expirence: '5+ Years',
      Location: 'Bangalore',
      Bookings: '1k+ Bookings',
      Brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto enim corporis iure iusto, quas ad, minima a fugit quibusdam nostrum nesciunt nemo adipisci saepe ullam provident cum optio molestias!',
      Price: '1000',
      Time: '12 days Ago'
    }
  ]
  return <div className="mx-4">
    <div className="flex justify-between items-center">
      <div className="text-4xl text-mine-shaft-300 font-semibold m-4"> Recommeded Job</div>
      <Relevance></Relevance>
    </div>

    {/* All the Services */}
    <div className="px-8">
      {Data.map((job,index) => <ServiceCard key={index} job={job} ></ServiceCard>) }
    </div>
   
    
   
    
  </div>
}

export default Jobs;