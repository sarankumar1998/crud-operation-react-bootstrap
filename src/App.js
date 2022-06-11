import './App.css';
import Home from './container/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import About from './container/About';
import Navbar from './component/Navbar';
import Addvendor from './container/Adduser/Addvendor';
import Notfound from './container/Notfound'
import Editvendor from './container/Adduser/Editvendor';
import Viewvendor from './container/Adduser/Viewvendor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
<div>

<Navbar />
      <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/adduser/editvendor/:id' element={<Editvendor/>} />
          <Route  path='/adduser/addvendor' element={<Addvendor/>} />
          <Route  path='/adduser/:id' element={<Viewvendor/>}  />
          <Route path='/notfound' element={<Notfound/>} />
        </Routes>
        </Router>
      </div>
</div>

  )
}

export default App;


