import React, { useState } from 'react';

export default function ToggleSwitch(props) {
    const [isActive,setIsactive] = props
    const handleCLick = ()=>{
        setIsactive(!isActive)
    }

    return(
        <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
            <input
            id='toggle'
            className={`toggle-checkbox absolute block w-5 h-5 border-none appearance-none cursor-pointer rounded-full bg-neutral-700
            ${isActive ?  "bg-primaryBlue-main" : "bg-neutral-700"}
          `}
            type='checkbox'
            onChange={handleCLick}
            checked = {isActive}
            />
            <label
            htmlFor='toggle'
            className={`block overflow-hidden p-[1px_4px_1px_4px] rounded-full bg-neutral-400 cursor-pointer
                 ${isActive? "bg-primaryBlue-border": "bg-neutral-400"}
            `}
            />
        </div>
    )
}