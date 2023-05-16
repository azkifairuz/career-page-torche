import React, { useState } from 'react';

export default function ToggleSwitch(props) {
    const [isActive,setIsactive] = props
    const handlerCLick = ()=>{
        setIsactive(!isActive)
    }
}