

import './App.css'
import LineChart from './component/LineChart/LineChart'
import NavBar from './component/NavBar/NavBar'
import PriceOptions from './component/PriceOptions/PriceOptions'



function App() {


  return (
    <>

      <NavBar></NavBar>
      <h1 className='text-rose-600 text-5xl'>Responsive Nav Bar</h1>

      <PriceOptions></PriceOptions>

      <LineChart></LineChart>



    </>
  )
}

export default App
