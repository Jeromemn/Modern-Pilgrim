import React, { useState, useEffect } from "react";
import { Button } from "./FilterButtonStyle";

import styled from "styled-components";

const DropDownContainer = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  border-radius: 12px;
  position: relative;
  height: 3rem;

`;

const DropdownList = styled.ul`
  position: absolute;
  list-style-type: none;
  align-items: flex-start;
  transition: height 0.3s ease;
  padding: 0;
`;

const DropdownItem = styled.li`
  /* text-decoration-style: none; */
  /* text-decoration: none; */
`;

// will need a is filter selected to communicate

export default function Filters({ value, upDateChange }) {
  const [showDropdown, setShowDropdown] = useState(false);
  {
    /* <Dropdown 
showDropdown={showDropdown}
setShowDropdown={() => setShowDropdown(!showDropdown)}
/> */
  }
  // const filterTypes
  return (
    // <div>
    <DropDownContainer>
      <Button onClick={setShowDropdown}> Filter</Button>
      {showDropdown && (
        <DropdownList>
          <DropdownItem>
            {" "}
            Price
            <input type="text" onChange={upDateChange} value={value}></input>
          </DropdownItem>
          <DropdownItem> Stars </DropdownItem>
          <DropdownItem> Season </DropdownItem>
        </DropdownList>
      )}
    </DropDownContainer>
    // </div>
  );
}
