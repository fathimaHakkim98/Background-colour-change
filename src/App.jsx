import { useState,useEffect } from 'react'
import './App.css'


function App() {

  const [background,setBackground] = useState()

   useEffect(()=>{
     document.body.className= background
   },[background])

  const changeColor = (color)=>{
    setBackground(color)

    
    
  }
  

  return (
    <>
    <div style={{width:'100%', height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      
      <div className='rounded p-3'>
      <h3 className='text-center'>Background colour change</h3>
  
          <div style={{marginTop:'200px'}} className='text-center'>
            <button onClick={()=>changeColor('bg-danger')} type="button" class="btn btn-danger me-2 border-dark">Red</button>
            <button onClick={()=>changeColor('bg-info')} type="button" class="btn btn-info me-2 border-dark">Blue</button>
            <button onClick={()=>changeColor('bg-success')} type="button" class="btn btn-success me-2 border-dark">Green</button>
          <button onClick={()=>changeColor('bg-warning')} type="button" class="btn btn-warning me-2 border-dark">Yellow</button>
            <button onClick={()=>changeColor('bg-secondary')} type="button" class="btn btn-secondary me-2 border-dark">Gray</button>
          </div>
          
      </div>
      
    </div>
    </>
  )
}

export default App