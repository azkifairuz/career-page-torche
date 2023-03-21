import React from 'react'

export default function InputField(props) {
  const { label, type, placeholder } = props
  return (
    <div className='flex flex-col gap-[8px] w-full font-cairo'>
      <label className='font-[#151515] font-bold'>
        {label}
      </label>
      <input type={type} placeholder={placeholder} className="w-full px-[16px] py-[10px] rounded-[8px] border-[1px] border-[#A7ABB8]  "/>
    </div>
  )
}
