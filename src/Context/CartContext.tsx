import React  from "react";
import { createContext, useContext, useState, ReactNode } from "react";
import { Job } from "../Data/Job";
import { showNotification } from '@mantine/notifications';
import { IconX, IconCheck } from '@tabler/icons-react';


interface CartContextType {
  Favorate : Job[],
  cart : Job[],
  total: number,
  addToCart: (job: Job) => void,
  removeFromCart: (job: Job) => void
  addToFavorate: (job: Job) => void,
  removeFromFavorate: (job: Job) => void

 }

 const CartContext = createContext<CartContextType | undefined>(undefined);

 interface CartProviderProps {
  children: ReactNode; // Explicitly define the type for children
}

 export const CartProvider: React.FC<CartProviderProps> =  ({ children } ) => {

    const [cart, setCart] = useState<Job[]>([]);
    const [Favorate, setFavorate] = useState<Job[]>([]);
    const [total, setTotal] = useState<number>(0);
   

    const addToCart = (job: Job) => {
      setCart((prevCart) => {
        const exists = prevCart.some((item) => item.Id === job.Id);
        if (!exists) {
          const updatedCart = [...prevCart, job];
          const updatedTotal = updatedCart.reduce(
            (sum, item) => sum + parseInt(item.Price, 10),
            0
          );
          setTotal(updatedTotal); // Update the total after adding the job
          return updatedCart; // Update the cart
        }
        else {
          showNotification({
            title: 'This Service Already in Cart',
            icon: <IconX size={16} />,
            message: `The "${job.ServiceName}" is already in your cart.`,
            color: 'red', // Notification color
            radius: 'md', // Optional: corner radius
          });
        }
       
        return prevCart; // No changes if the job already exists
      });
    };
    
    const removeFromCart = (job: Job) => {
      setCart((prevCart) => {
        const updatedCart = prevCart.filter((item) => item.Id !== job.Id);
        const updatedTotal = updatedCart.reduce(
          (sum, item) => sum + parseInt(item.Price, 10),
          0
        );
        setTotal(updatedTotal); // Update the total after removing the job
        return updatedCart; // Update the cart
      });
    };

    const addToFavorate = (job: Job) => {
      setFavorate((prevFav) => {
        // Check if the job already exists in the 
      
          showNotification({
            title: 'Added to favorate',
            icon: <IconCheck size={16} />,
            message: `"${job.ServiceName}" is now in your favorate list.`,
            color: 'green', // Notification color
            radius: 'md', // Optional: corner radius
          });
        
        return [...prevFav, job]; // Avoid duplicates
      });
  
    };
  
   

    const removeFromFavorate = (job: Job) => {
      showNotification({
        title: 'Removed From  favorate',
        icon: <IconX size={16} />,
        message: `"${job.ServiceName}" is now removed from your favorate list.`,
        color: 'red', // Notification color
        radius: 'md', // Optional: corner radius
      });
      setFavorate((prevFav) => prevFav.filter((fav) => fav.Id !== job.Id));
      };

    return (
      <CartContext.Provider value= {{cart, Favorate, total, addToCart, removeFromCart ,addToFavorate,removeFromFavorate,
       }}>
        {children}
      </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};


