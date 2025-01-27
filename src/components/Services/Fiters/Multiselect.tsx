import { useEffect, useState } from 'react';
import { Checkbox, Combobox, Group, Pill, PillsInput, useCombobox, ScrollArea } from '@mantine/core';
import { IconSelector } from '@tabler/icons-react';


const MAX_DISPLAYED_VALUES = 2;

const SearchableMultiSelect = ( {Data} : any ) => {
 
    useEffect(() => {
      setData(Data.options)
    }, [])
    const combobox = useCombobox({
      onDropdownClose: () => combobox.resetSelectedOption(),
      onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });
  
    const [search, setSearch] = useState('');
    const [value, setValue] = useState<string[]>([]);
    const [data, setData] = useState<string[]>([]);
  
    const handleValueSelect = (val: string) => {
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      ); 

      setSearch('');
    }
      
  
    const handleValueRemove = (val: string) =>
      setValue((current) => current.filter((v) => v !== val));
  
    const values =  value
    .slice(
      0,
      MAX_DISPLAYED_VALUES === value.length ? MAX_DISPLAYED_VALUES : MAX_DISPLAYED_VALUES - 1
    ).map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
        {item}
      </Pill>
    ));
  
    const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
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
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));
  
    return (
      <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
        <Combobox.DropdownTarget>
          <PillsInput 
          variant='unstyled'
          className=' hover:shadow-[0_0_2px_1px_black]  !shadow-mine-shaft-800 '
          rightSection={<IconSelector stroke={2} />}
          leftSection={
            <div className='text-bright-sun-400 p-1 bg-mine-shaft-900 rounded-full mr-4'>{<Data.icon/>}</div>
          }
          pointer 
          onClick={() => combobox.toggleDropdown()}>
            <Pill.Group>
              {values.length > 0 ? (
                 <>
                 {values}
                 {value.length > MAX_DISPLAYED_VALUES && (
                   <Pill>+{value.length - (MAX_DISPLAYED_VALUES - 1)} more</Pill>
                 )}
               </>
              ) : (
                <></>
              )}
  
              <Combobox.EventsTarget>
              <PillsInput.Field
                
             
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder={value.length === 0 ? `${Data.title}` : ''}
                onChange={(event) => {
                  combobox.openDropdown()
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>
  
        <Combobox.Dropdown>
        <Combobox.Options>
        <ScrollArea.Autosize mah={200} type="scroll">
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </ScrollArea.Autosize>
        </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    );
  }


export default SearchableMultiSelect
