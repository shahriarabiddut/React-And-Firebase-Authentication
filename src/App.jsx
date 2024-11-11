import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
     <Header></Header>
     <div className="w-11/12 md:w-10/12 mx-auto">
      <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </>
  )
}

export default App
