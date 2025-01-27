import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox ,Checkbox, Group, ScrollArea, } from '@mantine/core';
import { IconSelector } from '@tabler/icons-react';



const SelectComboboxData = ( {Data} : any ) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string >( String );

  const options = Data.options.map((item : any) => (
    <Combobox.Option value={item} key={item}
    >
       <Group gap="sm">
          <Checkbox
          size='xs'
          color='bright-sun.6'
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: 'none' }}
          />
          <span> {item}</span>
        </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
        variant='unstyled'
        className=' hover:shadow-[0_0_2px_1px_black]  !shadow-mine-shaft-800 '
        rightSection={<IconSelector stroke={2} />}
        leftSection={
          <div className='text-bright-sun-400 p-1 bg-mine-shaft-900 rounded-full mr-4'>{<Data.icon/>}</div>
        }
          component="button"
          type="button"
          pointer
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder> {Data.title}</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
        <ScrollArea.Autosize mah={200} type="scroll">
          {options}
          </ScrollArea.Autosize>
          </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export default SelectComboboxData