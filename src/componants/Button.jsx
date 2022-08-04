

function Button({children ,className , click , btnDisabled}) {

  return (
    <div>
      <button style={{opacity: (btnDisabled)? '.6' : '1'}} className={className} onClick={click} disabled={btnDisabled} type="submit" >{children}</button>
    </div>
  )
}

export default Button
