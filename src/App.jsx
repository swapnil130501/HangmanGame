import './App.css'
import TextInputForm from './components/TextInputForm/TextInputForm'
import TextinputformContainer from './components/TextInputForm/TextInputFormContainer'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import Home from './pages/Home';

function App() {

  return (
    <>
     <Routes>
        <Route path='/start' element={<StartGame />}/>
        <Route path='/play' element={<PlayGame />}/>
        <Route path='/' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
