import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const FilterDropdown = ({
  title = 'Status',
  dropDownData,
  updateFilterHandler,
}) => {
  const [menu, toggleMenu] = useState(false);
  const [status, setStatus] = useState(false);
  const statusHandler = (value) => {
    setStatus(value.name);
    // setting type actions purpose
    if (value.name === 'All') return updateFilterHandler(value);
    if (title === 'Department') {
      updateFilterHandler({ ...value, type: 'departmentId' });
    }
    updateFilterHandler({ ...value, type: title });
  };
  return (
    <div className="mr-3">
      <Dropdown isOpen={menu} toggle={() => toggleMenu(!menu)}>
        <DropdownToggle tag="i" className="arrow-none card-drop">
          <span style={{ cursor: 'pointer' }} className="font-size-14">
            {dropDownData === null ? 'Loading ...' : status ? status : title}
            <i className="ml-2 fas fa-angle-down text-light-50"></i>
          </span>
        </DropdownToggle>
        <DropdownMenu right>
          {dropDownData.map((drop) => (
            <DropdownItem key={drop.id} onClick={() => statusHandler(drop)}>
              {drop.name}
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem
            onClick={() => statusHandler({ name: 'All', type: title })}
          >
            <i className="fas fa-times font-size-14 mr-2" />
            All
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default FilterDropdown;
