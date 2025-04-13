
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import PredictionView from './pages/PredictionView'
import PredictorForm from './pages/PredictorForm'
import Header from './pages/Header/Header'
import PredictionResults from './pages/PredictionResults'




function App() {

  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/PredictionView" element={<PredictionView/>}/>
      <Route path="/PredictorForm" element={<PredictorForm/>}/>
      <Route path="/PredictionResults" element={<PredictionResults/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
