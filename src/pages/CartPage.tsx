import Header from "../components/Customer/Header/Header";
import Footer from "../components/Footer";
import { Divider } from "@mantine/core"
import { useCart } from "../Context/CartContext"
import { Table } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@mantine/core';
import CheckOut from "../Booking/Checkout";



const CartPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const { cart ,total, removeFromCart } = useCart();
  const gst = 18/100 * total;
  const discount = 20/100 * (total + gst);



  return <div  className=" flex flex-col min-h-[100vh] bg-mine-shaft-950">
    <Header></Header>
    <Divider mx="md" mb='xl' />

    <div className="flex-grow flex justify-center items-center">

      {
      cart.length == 0 ? 
      <div className="flex flex-col gap-4 justify-center items-center">
         <img className="w-32 h-32" src="/ServicePages/carts.png" alt="" />
         <div className="text-2xl text-mine-shaft-300 font-semibold"> No Items In Your Cart  </div>
      </div>
      : 
      <div className="w-full flex mx-8 gap-4">
        <div className="w-4/5">
        <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
          <Table.Tr className="text-2xl font-bold  text-bright-sun-300">
            <Table.Th className="!text-center">Service</Table.Th>
            <Table.Th className="!text-center">Service Name</Table.Th>
            <Table.Th className="!text-center">Company Name</Table.Th>
            <Table.Th className="!text-center">Price</Table.Th>
            <Table.Th className="!text-center">Remove Item</Table.Th>
          </Table.Tr>
        </Table.Thead>
  
        <Table.Tbody> 
          { cart.map((job,index) =>  
            <Table.Tr key={index} className="text-xl font-bold text-center">
            <Table.Td className="flex items-center justify-center"> <img className="w-24 h-24 " src={job.image} alt="" /> </Table.Td>
            <Table.Td>{job.ServiceName}</Table.Td>
            <Table.Td>{job.CompanyName}</Table.Td>
            <Table.Td>&#8377; {job.Price}</Table.Td>
            <Table.Td><Button variant="light" color="red" radius="md" size="md" onClick={() => removeFromCart(job)}>Delete</Button></Table.Td>
          </Table.Tr> 
        )}
        </Table.Tbody>
      </Table>
        </div>
         
            
            <div className="w-1/5 h-[360px] flex flex-col gap-2 bg-mine-shaft-900 p-4 rounded-lg sticky top-8 hover:scale-105 hover:shadow-[0_0_5px_2px_black] transition duration-300 !shadow-bright-sun-300">
        <div className="text-3xl font-bold text-bright-sun-400 text-center">Summary</div>

        <div className="text-xl mt-5 flex justify-between">
          <div>Total</div>
          <div className="w-2/6 flex justify-between items-center">
          <div>&#8377;</div>
          <div>{total}</div> 
          </div>
        </div>

        <div className=" text-xl  mt-3 flex justify-between">
          <div >GST </div>
          <div className="w-2/6 flex justify-between items-center">
          <div>&#8377;</div>
          <div>{gst}</div>
          </div>
        </div>

        <div className=" text-xl my-3 flex justify-between">
          <div>Discount</div>
          <div className="w-2/6 flex justify-between items-center">
          <div>&#8377;</div>
          <div>{-discount}</div>
          </div>
        </div>

        <Divider  color="mine-shaft.5" />

        <div className=" text-xl my-3 flex justify-between">
        <div >Grand Total</div>
        <div className="w-2/6 flex justify-between items-center">
          <div>&#8377;</div>
          <div>{total + gst - discount}</div>
          </div>
      </div>

      
      <Button
      onClick={open}
       className='mt-2 ' variant="filled" color="lime" fullWidth><span className="text-lg font-bold">Check Out</span></Button>
     
    </div>
  </div>   
      }

{ <CheckOut opened={opened} close={close} /> }
</div>
    
    <Footer></Footer>
  </div>
}

export default CartPage;