import React from 'react'

export default function Home(props) {
    var a =parseInt(props.value1);
    var b =parseInt(props.value2);
  return (
    <div>
      {props.children}
      <br/>
      A value is {a}<br/>
      b value is {b}<br/>
      c value is {a+b}<br/>
      
    </div>
  )
}

Home.defaultProps ={
    value1 : 0
}