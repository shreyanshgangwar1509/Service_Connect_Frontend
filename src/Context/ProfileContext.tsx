import React, { createContext, useState, useContext,  ReactNode } from 'react';

interface BasicInfo {
  name: string;
  about: string;
}

interface ContactInfo {
  email: string;
  phone: string;
}

interface AddressInfo {
  home: string;
  city: string;
  pin: string;
  country: string;
}

interface PaymentInfo {
  number: string;
  date: string;
  cvv: string;
  name: string;
}

interface ProfileContextType{
  edit: boolean[],
  basic: BasicInfo,
  contact: ContactInfo,
  address: AddressInfo ,
  payment: PaymentInfo,
  handleBasicChange: (field: string, value: string) => void,
  handleContactChange: (field: string, value: string) => void,
  handleAddressChange: (field: string, value: string) => void,
  handlePaymentChange: (field: string, value: string) => void,
  handleClick: (index: number) => void
}
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);


interface ProfileProviderProps {
  children: ReactNode; // Explicitly define the type for children
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({children}) => {

  const [edit, setEdit] = useState([false,false,false,false]);

  const [basic , setBasic] = useState({
    name: 'Ritik Jain',
    about: 'Your comfort, our commitment! We are here to serve you better every day.'
  })

  const [contact , setContact] = useState({
    email: 'ritikjain590@gmail.com',
    phone: '7836086508'
  })

  const [address , setAddress] = useState({
    home: 'B/22 Street No - 7 New Modern Shahdara',
    city: 'New Delhi',
    pin: '110032',
    country: 'India'
  })

  const [payment , setPayment] = useState({
    number: '0000 0000 0000 0000',
    date: '09/29',
    cvv: '8 1 2',
    name: 'Ritik Jain'
  })


  const handleBasicChange = (field: string, value: string) => {
    setBasic((prev) => ({
      ...prev, 
      [field]: value, 
    }));
  };

  const handleContactChange = (field: string, value: string) => {
   
    setContact((prev) => ({
      ...prev, 
      [field]: value, 
    }));
  };

  const handleAddressChange = (field: string, value: string) => {
   
    setAddress((prev) => ({
      ...prev, 
      [field]: value, 
    }));
  };

  const handlePaymentChange = (field: string, value: string) => {
   
    setPayment((prev) => ({
      ...prev, 
      [field]: value, 
    }));
  };

  const handleClick = (index: number) => {
    const newEdit = [...edit]; 
    newEdit[index] = !newEdit[index]; 
    setEdit(newEdit); 
    
  }


  return <ProfileContext.Provider value={{edit, basic, contact,address, payment, handleBasicChange, handleContactChange, handleAddressChange, handlePaymentChange, handleClick}}>
    {children}
    </ProfileContext.Provider>
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

