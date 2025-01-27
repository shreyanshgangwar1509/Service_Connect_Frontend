import Header from "../../components/Professional/Header"
import SideBar from "../../components/Professional/SideBar"
import { Divider } from "@mantine/core"

const DashBoard = () => {
  return <div className="w-full min-h-[100vh] bg-mine-shaft-950 flex ">
    <SideBar></SideBar>
    <div className="w-full">
    <Header></Header>
    <Divider mx="md" mb='xl' />
    </div>
   
  </div>
}

export default DashBoard