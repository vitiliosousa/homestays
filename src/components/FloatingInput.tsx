// app/components/FloatingInput.tsx
import React from 'react'

interface FloatingInputProps {
  label: string
  id: string
  type?: string
  required?: boolean
}

export default function FloatingInput({ label, id, type = 'text', required = false }: FloatingInputProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        required={required}
        placeholder=" "
        className="peer w-full border border-gray-400 rounded-md px-3 pt-5 pb-2 text-sm text-gray-900 
                   placeholder-transparent focus:outline-none focus:border-slamon"
      />
      <label
        htmlFor={id}
        className="absolute left-1/2 -translate-x-1/2 -top-2.5 px-2 text-xs text-gray-500 bg-white z-10
                   transition-all duration-200 
                   peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base 
                   peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-x-0
                   peer-focus:-top-2.5 peer-focus:left-1/2 peer-focus:-translate-x-1/2 peer-focus:text-xs"
      >
        {label}
      </label>
    </div>
  )
}
