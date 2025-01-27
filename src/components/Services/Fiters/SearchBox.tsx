
import { IconMapPin,  IconStar,IconBriefcase, IconSearch } from "@tabler/icons-react";
import SearchableMultiSelect from "./Multiselect";
import SelectComboboxData from "./Combobox";

import { RangeSlider } from '@mantine/core';
import { useState } from 'react';



const SearchBox = () => {

  const [value, setValue] = useState<[number, number]>([0, 750]);


  const MultiselectData = [
    {
      title: 'Search Category',
      icon: IconSearch,
      options: ['Table' , 'Chair', 'Bed', 'Cubord', 'Ceiling', 'Floaring']
    },
    {
      title: 'Search Location',
      icon: IconMapPin,
      options: ['Delhi','Mumbai','Kolkata','Chennai','Bengaluru','Hyderabad','Jaipur','Lukhnow','Pune',  'Guwahati','Ahemdabad','Bhubaneswar']
    },

  ]

  const ComboboxData = [
  
    {
      title: 'Experience',
      icon: IconBriefcase ,
      options: ['More than 1 Year', 'More than 3 Year', 'More than 5 Year','More than 10 Year', 'More than 20 Year',  'More than 30 Year', 'More than 50 Year']
    },

    {
      title: 'Rating',
      icon:  IconStar ,
      options: [ `4 \u2B50 & above`, '3 \u2B50 & above']
    }
  ]


    return <div className="flex flex-col gap-12 ">

      {/* Category & Location */}
      {
         MultiselectData.map((item,index) => <div key={index} className=""> 
        <SearchableMultiSelect Data = {item}/> 
        </div>)
      }

      {/* Expierience and Rating */}
      {
        ComboboxData.map((item,index) => <div key={index} className=""> 
        <SelectComboboxData Data = {item}/> 
        </div>)
      }

      {/* Price */}
      <div className="mr-8">
        
      <RangeSlider 
      color='bright-sun.4' 
      size='sm' value={value} 
      onChange={setValue} 

      min={0}
      max={1000}
      label={(value) => value.toFixed(1)}
      step={10}
      styles={{ markLabel: { display: 'none' } }}
     
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',}}
          />
     
      <div className="flex justify-between text-lg mt-2 text-mine-shaft-300">
          <div>Price</div>
          <div>&#8377;{value[0]} - &#8377;{value[1]}</div>
        </div>

        </div>
      
    </div> 
}

export default SearchBox;