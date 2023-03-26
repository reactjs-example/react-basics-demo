import React from 'react'

export const HelloWorld = () => {
  const handler = ()=>{
    alert('I am button')
  }  

  const handler1=(a,b)=>{
    alert(b.type)
  }
  return (
    <div>HelloWorld India
        <button onClick={handler}>Click Me</button>
        <button onClick={(e)=>{handler1('a',e)}}>Click Me 1</button>
    </div>
  )
}
