
import { Modal, Button,TextInput} from '@mantine/core';


import { useProfile } from '../Context/ProfileContext';
import { IconUserCircle, IconMail,  IconPhone, IconHome, IconBuildings, IconFlag, IconMapPinCode,  } from '@tabler/icons-react';
import { useCart } from '../Context/CartContext';

interface CheckOutProps {
  opened: boolean; // Whether the modal is open
  close: () => void; // Function to close the modal
}

const CheckOut: React.FC<CheckOutProps> = ({ opened, close}) => {
 
  const Detail = useProfile();
  let {total} = useCart();
  total = ((total + (18/100 * total)) - (20/100 * (total + (18/100 * total))));

  

  return (
    <>
    <div className='flex'>
    <Modal opened={opened} onClose={close}  centered>
      <div className='flex flex-col gap-3'>
        <div className='text-bright-sun-400 text-3xl font-bold text-center mb-2'>Check Out</div>
               
       
                <div className="flex flex-col gap-2 mt-2">
                     <label className="text-mine-shaft-100" htmlFor="name">Your Name <span className='text-red-500'>*</span></label>
                     <TextInput
                        leftSectionPointerEvents="none"
                        leftSection={<IconUserCircle stroke={2} />}
                        color='mine-shaft.3'
                        disabled
                        placeholder="Your Name"
                        value={Detail.basic.name}
                       
                        
                         />
                     
                      </div>

                      <div className="flex flex-col gap-2 mt-2">
                     <label className="text-mine-shaft-100" htmlFor="name">Your Email <span className='text-red-500'>*</span></label>
                     <TextInput
                        leftSectionPointerEvents="none"
                        leftSection={<IconMail stroke={2} />}
                        color='mine-shaft.3'
                        disabled
                        placeholder="Your Name"
                        value={Detail.contact.email}
                      
                         />
                     
                      </div>

                      <div className="flex flex-col gap-2 mt-2">
                     <label className="text-mine-shaft-100" htmlFor="name">Your Phone <span className='text-red-500'>*</span></label>
                     <TextInput
                        leftSectionPointerEvents="none"
                        leftSection={< IconPhone stroke={2} />}
                        color='mine-shaft.3'
                        disabled
                        placeholder="Your Name"
                        value={Detail.contact.phone}
                     
                         />
                     
                      </div>

                      <div className="flex flex-col gap-1 mt-2">
                     <label className="text-mine-shaft-100" htmlFor="name">Your Address <span className='text-red-500'>*</span></label>
                     <TextInput
                        leftSectionPointerEvents="none"
                        leftSection={< IconHome stroke={2} />}
                        color='mine-shaft.3'
                        disabled
                        placeholder="Your Name"
                        value={Detail.address.home}
                      
                         />
                
                 
                     <TextInput
                        leftSectionPointerEvents="none"
                        leftSection={< IconBuildings stroke={2} />}
                        color='mine-shaft.3'
                        disabled
                        placeholder="Your Name"
                        value={Detail.address.city}
                      
                         />
                     
                     
                 
                     <TextInput
                        leftSectionPointerEvents="none"
                        leftSection={< IconMapPinCode stroke={2} />}
                        color='mine-shaft.3'
                        disabled
                        placeholder="Your Name"
                        value={Detail.address.pin}
                       
                         />
                     
                     
                    
                     <TextInput
                        leftSectionPointerEvents="none"
                        leftSection={< IconFlag stroke={2} />}
                        color='mine-shaft.3'
                        disabled
                        placeholder="Your Name"
                        value={Detail.address.country}
                       
                         />
                     
                      </div>
                    

                       <div className='w-full  mt-4'>

                        <Button  fullWidth  size='md'variant="filled" color="lime" >
                        <span className='text-xl font-bold'>Payment &#8377;{total}</span>
                     </Button>
                  </div>

                

      </div>
      </Modal>
  
    </div>
      

     
    </>
  );
}

export default CheckOut