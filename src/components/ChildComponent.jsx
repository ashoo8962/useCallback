import React  from "react"

const ChildComponent = (props) => {
    console.log('child comp got rerendered')
  return (
    <div>
      <button>
        {props.buttonName}
        </button>
    </div>
  )
}

export default ChildComponent
