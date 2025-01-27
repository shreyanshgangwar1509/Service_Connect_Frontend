
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useCart } from "../../../Context/CartContext";


const Cart = () => {

  const { cart, total, removeFromCart } = useCart();

  return (
    <div className=" m-4 py-4 px-2 border-mine-shaft-900 border-2 rounded-xl hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_5px_2px_black] transition duration-300 !shadow-bright-sun-300  flex flex-col gap-2 items-center hover:text-bright-sun-400 text-mine-shaft-300 text-lg overflow-hidden">

      <img className="w-32 h-32" src="/ServicePages/carts.png" alt="" />
      {cart.length === 0 ? (
        "No items in your cart"       
      ) 
      : 
      (
        <div className='w-full flex flex-col gap-2 items-center'>
          {cart.map((job , index ) => (
            <div key={index} className=" w-full flex justify-between items-center mt-2 text-sm">
              <div className='w-1/2'>{job.ServiceName}  </div>
              <div> &#8377; {job.Price}</div>
              <Button variant="light" color="red" radius="md" size="xs" onClick={() => removeFromCart(job)}>Delete</Button>
            </div>
          ))}

            <Button fullWidth variant="filled" color="bright-sun.7"  radius="md" className='mt-2'>
            <Link to = {`/Cart`}><span className='mr-2'>Your Cart:</span>   &#8377; {total}</Link> 
            </Button>

        </div>
      )}
    </div>
  );
};

export default Cart;
