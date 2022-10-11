import React from 'react'

function Alert(props) {
  const capitalize = (type) => {
    const typ = type.toLowerCase()
    return typ.charAt(0).toUpperCase() + typ.slice(1)
  }

  return (
    <div style={{height:'50px'}}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  )
}

export default Alert
