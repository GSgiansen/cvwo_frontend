import React from 'react'
import { Select } from '@chakra-ui/react'
import { ChevronDownIcon ,MdArrowDropDown} from '@chakra-ui/icons';
const Dropdownmenu = () => {
  const button = <button type="button"></button>;
  return (
    <div>
        
      <Select icon={<ChevronDownIcon/>} placeholder="select">
        <option value="tea">tea</option>
        <option value="rant">rant</option>
        <option value="fluff">fluff</option>
      </Select>
    </div>
  );
};

export default Dropdownmenu