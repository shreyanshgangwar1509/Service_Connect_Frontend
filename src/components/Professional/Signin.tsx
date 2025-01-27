import { TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

import { PasswordInput} from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';



const Signin = () => {
  return <div className="w-1/2 flex flex-col  bg-mine-shaft-950">
    
  <div className="text-4xl text-bright-sun-400 mt-24 font-semibold text-center  hover:scale-110 transition-all duration-300">Professional Account</div>

  <div className=" ml-16 flex flex-col gap-8 w-auto pr-32 mt-20 " >
                 

                    <div>
                    <TextInput
                    variant="unstyled"
                    required
                      leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
                     label="Email"
                     placeholder="Your Email"
                   styles={{
                        input: {
                         backgroundColor: '#2d2d2d', 
                         border: '1px solid #5d5d5d', 
                         padding: '1rem 2rem',
                         outline: 'none',
                         color: '#d1d1d1',
                         borderRadius: '4px', 
                         '::placeholder': {
                          color: '#666666', // Set your placeholder color here
                          opacity: 1, // Ensure the color appears as defined
                        },
          
                         },
                         label: {
                          color: '#e7e7e7',
                          fontSize: '16px', // Optional: Adjust font size if needed
                         
                         }
                    }} />
                    </div>


                    <div>
                    <PasswordInput
                   variant="unstyled"
                   leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                   label="Password"
                   withAsterisk
                   placeholder="Password"
                   styles={{
                    input: {
                     backgroundColor: '#2d2d2d', 
                     border: '1px solid #5d5d5d', 
                     padding: '1rem 2rem',
                     outline: 'none',
                     color: '#d1d1d1',
                     borderRadius: '4px', 
                     '::placeholder': {
                      color: '#666666', // Set your placeholder color here
                      opacity: 1, // Ensure the color appears as defined
                    },
      
                     },
                     label: {
                      color: '#e7e7e7',
                      fontSize: '16px', // Optional: Adjust font size if needed
                     
                     }
                }}/>
                    </div>

                   
                    <Button variant="filled" color="yellow"  styles={{
                          label: {
                            fontSize: '20px',
                            color: '#454545',
                          },
                          
                        }}>
                        <Link to={'/DashBoard'}>Login Account</Link></Button>

                    <div className='text-mine-shaft-400 text-center text-lg  hover:scale-110 transition-all duration-300'>
                      Don't Have An Account ?  <Link className='text-bright-sun-400 ml-2 hover:border-b-2 border-bright-sun-500' to={'/ProfessionalSignup'}>Sign Up</Link>
                    </div>

                    <div className='text-mine-shaft-400 text-center text-lg  hover:scale-110 transition-all duration-300'>
                     <Link className='text-bright-sun-400 ml-2 hover:border-b-2 border-bright-sun-500 ' to={'/'}>Forgot Password ?</Link>
                    </div>
                    

                    
                    
          </div>           
  </div>
}

export default Signin