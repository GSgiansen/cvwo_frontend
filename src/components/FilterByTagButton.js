import React from "react";
import { Button, Select } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const FilterByTagButton = ({onFilter,getAll}) => {
  return (
    <div>
      <Select

    
        icon={<ChevronDownIcon />}
        placeholder="Filter by"
        bgColor="dark grey"
        color="white"
        maxWidth="30vw"
        padding="10px"
        fontWeight="bold"
        onChange={(e) => {
          {
            if(e.currentTarget.value !== "all"){
              onFilter(e.currentTarget.value)
            }
            else{
              getAll()

            }
          }

        }}
      >
        <option value="tea">tea</option>
        <option value="rant">rant</option>
        <option value="fluff">fluff</option>
        <option value="all">i love everything</option>
      </Select>
    </div>
  );
};

export default FilterByTagButton;
