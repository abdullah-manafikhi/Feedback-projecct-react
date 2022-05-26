

function Button({children ,className , click}) {
  return (
    <div>
      <button onClick={click} className={className} type="submit">{children}</button>
    </div>
  )
}

export default Button
