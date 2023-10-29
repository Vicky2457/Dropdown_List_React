import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  // State to track whether the dropdown is open or closed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to open the dropdown
  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  // Function to close the dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Function to handle item selection and display an alert
  const handleItemClick = (item) => {
    closeDropdown(); // Close the dropdown when an item is clicked
    window.alert(`You selected: ${item}`); // Show an alert with the selected item
  };

  return (
    <div className="dropdown-container" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
      <button className="dropdown-button"> <b> Dropdown List </b></button>
      {isDropdownOpen && (
        // Render the dropdown list when isDropdownOpen is true
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className="dropdown-list-item"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
