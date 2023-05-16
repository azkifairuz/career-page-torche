import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative inline-block w-fit align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        className="toggle-checkbox absolute block w-[56px] h-[24px] z-50 border-none appearance-none cursor-pointer"
        checked={isActive}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggle"
        className={`toggle-label  overflow-hidden h-[24px] w-[56px] pl-[4px] py-1 flex items-center rounded-full bg-primaryBlue-border cursor-pointer ${
          isActive ? 'bg-primaryBlue-border' : 'bg-neutral-400'
        }`}
      >
        <span
          className={`${
            isActive ? 'translate-x-full bg-primaryBlue-main' : 'translate-x-0 bg-neutral-700'
          } inline-block w-6 h-5 transform  rounded-full transition-transform`}
        ></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;