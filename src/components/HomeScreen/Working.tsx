const Working = () => {
  return <div className="mt-24 mx-16">

      <div className="text-4xl font-bold text-mine-shaft-100 text-center mb-6">Reserve <span className="text-bright-sun-500">Your Service</span> in 3 Simple Steps</div>

  <div className="text-lg text-mine-shaft-300 text-center w-7/12 mx-auto">
  Your go-to solution for household services: quick selection, flexible scheduling, and instant confirmation
  </div>

    <div className="flex flex-col lg:flex-row  gap-20">

      {/* Left Section */}
      <div className="items-center hover:scale-110 transition duration-300">
          <img className ='w-[60rem]' src="Working/Girl.png" alt="girl" />
      </div>

      {/* Right Section */}
      <div className='w-full flex flex-col justify-center '>


            <div className="m-8 flex gap-3 hover:scale-105 transition duration-300">
            <div className="w-20 h-20 rounded-full bg-bright-sun-600 flex justify-center items-center">
                  <img className="w-14 h-14" src='Working/Search.png' alt='Search' />
                </div>
              <div className="flex flex-col justify-center">
                <div className="text-bright-sun-300 text-2xl">Browse and Choose Your Service </div>
                <div className="text-mine-shaft-200">Browse our extensive list of services and find exactly what you need with ease.</div>
                </div>
            </div>


            <div className="m-8 flex gap-3 hover:scale-105 transition duration-300">
            <div className="w-20 h-20 rounded-full bg-bright-sun-600 flex justify-center items-center">
                  <img className="w-14 h-14" src='Working/calendar.png' alt='celander' />
                </div>
              
              <div className="flex flex-col justify-center">
                <div className="text-bright-sun-300 text-2xl">Select Your Preferred Time </div>
                <div className="text-mine-shaft-200">Choose a convenient time that works best for you and book your service in a few clicks.</div>
              </div>
       
            </div>

            <div className="m-8 flex gap-3 hover:scale-105 transition duration-300">
            <div className="w-20 h-20 rounded-full bg-bright-sun-600 flex justify-center items-center">
                  <img className="w-14 h-14" src='Working/mechanic.png' alt='mechanic' />
                </div>
            
              <div className="flex flex-col justify-center">
                <div className="text-bright-sun-300 text-2xl">Sit Back and Let Us Take Care of the Rest</div>
                <div className="text-mine-shaft-200">Relax while our skilled professionals handle the job with precision and care.</div>
              </div>
           
            </div>
      </div>
    </div>

  </div>
  
  
}

export default Working;