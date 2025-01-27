import CitySlider from "../components/HomeScreen/CitySlider";
import Features from "../components/HomeScreen/Features";
import Header from "../components/Customer/Header/Header";
import Hero from '../components/HomeScreen/Hero'
import Services from "../components/HomeScreen/Services";
import Working from "../components/HomeScreen/Working";
import Testimonial from "../components/HomeScreen/Testimonial";
import Footer from "../components/Footer";




const Home = () => {
    return (
      <div className="min-h-[100vh] bg-mine-shaft-950 text-base">
           <Header></Header>
           
           <Hero></Hero>
           <CitySlider></CitySlider>
           <Services></Services>
           <Features></Features>
           <Working></Working>
           <Testimonial></Testimonial> 
           <Footer></Footer>         
      </div>
       
  
    )
}


export default Home;