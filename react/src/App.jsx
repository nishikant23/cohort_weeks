//import { lazy, Suspense } from 'react'
//import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { UseContext } from './context';

function App() {
  const [ count, setCount ] = useState(0);
  console.log("Count rerenders")
  return (
    <>
       <Count setCount={setCount}/>
    </>
  )
}

function Count({setCount}) {
  return <>
    <CountRender />
    <Browse setCount={setCount}/>
  </>
}
function CountRender() {
  const count  = useContext(UseContext)
  return <>
  {count}
  </>
}

function Browse({setCount}) {
  const count  = useContext(UseContext)
  return <>
      <button onClick={ () => {
    setCount(count+1)
  }}>Increase</button>,

  <button onClick={() => {
    setCount(count-1)
  }}>Decrease</button>
  </>
}

// function Appbar() {
//   const navigate = useNavigate()

//   return <>
//     <div style={{background: "Pink", color: "black"}}>
//   <p>
//     <button style={{background: "Auqa"}} onClick={() => {
//       navigate("/")
//     }}>Landing Page</button>
//     <button style={{background: "Auqa"}} onClick={() => {
//      navigate("/dashboard")
//     }}>Dashboard</button>
//   </p>
// </div>
//   </>
// }

export default App
