

import './App.css'
import Header from './Components/Layout/Header/Header'
import Menu from './Components/Layout/Menu/Menu'
import Main from './Components/Layout/Main/Main'
import Footer from './Components/Layout/Footer/Footer'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
      <div className='App'>
        <Header/>
        <Menu/>
        <Main/>
        <Footer/> 
        <ToastContainer/>
      </div>

  )
}

export default App
