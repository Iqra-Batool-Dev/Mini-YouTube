
function Button({
    children,
    type = 'button',
    className = '',
    ...props 
}) {
  return (
    <button className={`cursor-pointer bg-blue-500 text-white rounded-2xl ${className}`} {...props} >
      {children}
    </button>
  )
}

export default Button
