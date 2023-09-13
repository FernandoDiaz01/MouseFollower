import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [enabled, setEnable] = useState(false)
  
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(()=> {
   
    const handleMove = (event) => {
      const { clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})
      setPosition({x:clientX, y:clientY})
    }
   
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }
//limpiar useEffect cuando el componente se desmonta y cuando cambia la dependencia
    return ()=>{
      window.removeEventListener('pointermove', handleMove)
    }
  },[enabled])

  return (
    <main>
    <div style={{
      position:'absolute',
      backgroundColor:'white',
      borderRadius:'50%',
      opacity:0.8,
      pointerEvents:'none',
      left:-20,
      top:-20,
      width:40,
      height:40,
      transform:`translate(${position.x}px, ${position.y}px)`
    }}  />
   <h1>Mouse Follower</h1>

   <button onClick={()=> setEnable(!enabled)} >{enabled ? 'Desactivar' : 'Activar'} seguir puntero </button>
 
   </main>
  )
}

export default App
