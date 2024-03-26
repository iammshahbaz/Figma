// import './App.css'
import Navbar from './Components/Navbar'
import Lessons from './Components/Lessons'
import Clients from './Components/Clients'
import Community from './Components/Community'
import  { Unseen, Design, Para } from './Components/Unseen'
import Helping from './Components/Helping'
import Caring from './Components/Caring'
import Footer from './Components/Footer'

function App() {
 
  return (
    <div>
      <Navbar/>
      <Lessons/>
      <Clients/>
      <Community/>
      <Unseen/>
      <Helping/>
      <Design/>
      <Para/>
      <Caring/>
      <Footer/>
    </div>
    
  )
}

export default App
