import React from 'react';
import { Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
 function Navi() {
  return (
      <Nav navbar>
        <UncontrolledDropdown>
          <DropdownToggle>
            Menu
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem href="/" active>Home</DropdownItem>
          <DropdownItem href="/currency" active>Currency Converter</DropdownItem>
          <DropdownItem href="/win" active>Win!</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
  );
}
export default Navi;