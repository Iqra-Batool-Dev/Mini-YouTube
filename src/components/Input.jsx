import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type= "text",
    className="",
    ...props
}, ref) {
    const id= useId()
  return (
    <div className=' flex flex-col '>
        {label && <label className='mb-1'
            htmlFor={id}>
            {label}
        </label>}
        <input type={type}
            className={`text-black border border-black/50 text-[1rem] p-2 rounded-2xl outline-none focus:border-blue-500`}
            ref={ref}
            {...props}
            id={id}
        />
    </div>
  )
})

export default Input
