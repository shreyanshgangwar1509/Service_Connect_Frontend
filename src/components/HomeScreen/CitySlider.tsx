import Marquee from "react-fast-marquee"

const CitySlider = () => {

  const cities = ['Delhi','Mumbai','Kolkata','Chennai','Bengaluru','Hyderabad','Jaipur','Lukhnow','Pune',  'Guwahati','Ahemdabad','Bhubaneswar'];

  return <div className="mt-20 mx-2">

    <div className="text-4xl font-bold text-mine-shaft-100 text-center mb-12">Available In <span className="text-bright-sun-500">100+ </span>Cities</div>


    <Marquee pauseOnHover= {true}>

      {cities.map((city, index) => <div key={index} className="mx-8 mt-2 px-2 py-2 hover:scale-110 transform transition-transform duration-300 ">
      <img className="w-32 h-32 " src={`Cities/${city}.png`} alt="city" />
      <div className="text-xl mt-2 text-center text-amber-300">{city}</div>

      </div> 
      )}
      
    </Marquee>
     
    </div>
}

export default CitySlider