
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import PredictionView from './pages/PredictionView'
import PredictorForm from './pages/PredictorForm'




function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/PredictionView" element={<PredictionView/>}/>
      <Route path="/PredictorForm" element={<PredictorForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
