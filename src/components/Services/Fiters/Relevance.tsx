import { useState } from 'react';
import {  Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt  = ['Popular', ' Most Recent', 'Price: Low to High', 'Price: High to Low',];

const Relevance = () =>  {
  const [selectedItem, setSelectedItem] = useState<string | null>( 'Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <> 
      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
         <div 
         className='border border-bright-sun-400 flex gap-2 text-bright-sun-300 px-2 py-1 mt-2 cursor-pointer rounded-xl items-center h-8 w-auto hover:scale-105 transition duration-300'
         onClick={() => combobox.toggleDropdown()}>
         {selectedItem} <IconAdjustments className='h-5 w-5' stroke={2} />
          </div> 

        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}

export default Relevance;