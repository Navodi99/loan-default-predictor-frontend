
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import PredictionView from './pages/PredictionView'
import PredictorForm from './pages/PredictorForm'
import Header from './pages/Header/Header'
import PredictionResults from './pages/PredictionResults'
import ScrolltoTop from './utils/ScrolltoTop'
import Login from './pages/Login'



function App() {

  return (
    <BrowserRouter>
    <ScrolltoTop/>
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 to-gray-800">
      <div className='sticky top-0 z-50 '>
      <Header />
      </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/PredictionView" element={<PredictionView/>}/>
      <Route path="/PredictorForm" element={<PredictorForm/>}/>
      <Route path="/PredictionResults" element={<PredictionResults/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
