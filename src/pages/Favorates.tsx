import Header from "../components/Customer/Header/Header";
import Footer from "../components/Footer";
import { useCart } from "../Context/CartContext";
import ServiceCard from "../components/Services/JobCards/ServiceCard";
import { Divider } from "@mantine/core"
import { Grid } from '@mantine/core';


const Favorate = () => {

  const { Favorate } = useCart();

  return <div className="flex flex-col min-h-[100vh] bg-mine-shaft-950">
   <Header></Header>
   <Divider mx="md" mb='xl' />
   <div className="px-8 flex-grow">
        {Favorate.length > 0 ? (
          <Grid>
            {Favorate.map((job) =>  <Grid.Col span={4}>
               <ServiceCard key={job.Id} job={job} /> 
               </Grid.Col>)}
            
          </Grid>
       
        ) : (
          <div className="text-center font-bold text-mine-shaft-300 text-4xl mt-8">
            No Favorites Added Yet.
          </div>
        )}
      </div>
   <Footer></Footer>

  </div>
}

export default Favorate;