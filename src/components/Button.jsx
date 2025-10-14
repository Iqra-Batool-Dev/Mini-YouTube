
function Button({
    children,
    type = 'button',
    className = '',
    ...props 
}) {
  return (
    <button className={`cursor-pointer  ${className}`} {...props} >
      {children}
    </button>
  )
}

export default Button
