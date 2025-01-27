import Header from "../components/Customer/Header/Header"
import Footer from "../components/Footer"
import { Divider } from "@mantine/core"
import SearchBox from "../components/Services/Fiters/SearchBox"
import Cart from "../components/Services/Others/Cart"
import Offer from "../components/Services/Others/Offers"
import Promise from "../components/Services/Others/OurPromise"
import Jobs from "../components/Services/JobCards/Jobs"
const PestControl = () => {
  return <div className="min-h-[100vh] bg-mine-shaft-950">
    <Header></Header>
    <Divider mx="md" mb='xl' />

      {/* Filters */}
      <div className="flex mx-16 ">
        <div className="w-1/3 mt-4 sticky top-[30px] h-[calc(100vh-100px)]">
          <SearchBox></SearchBox>
        </div>

        {/* Services */}
        <div className="w-1/2 ">
          <Jobs></Jobs>
        </div>


        {/* Cart & offers */}
        <div className="w-1/3 sticky top-[30px] h-[calc(100vh-100px)] overflow-scroll">
            <Cart></Cart> 
            <Offer></Offer>
            <Promise></Promise>
        </div>
      </div>
    <Footer></Footer>
  </div>
}

export default PestControl