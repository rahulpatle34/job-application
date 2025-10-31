import {Route,Routes} from 'react-router-dom';
import Login from './Components/Login';
import Jobs from './Components/Jobs';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import ProtectRoute from './Components/ProtectRoute';
import JobsItemDetails from './Components/JobsItemDetails';
import './App.css'

function App() {
  

  return (
    <>
      <div className='main-container'>
          
          <Routes>

                <Route path='/' element={<ProtectRoute Component={Home}/>}></Route>

                <Route path='/jobs' element={<ProtectRoute Component={Jobs}/>}></Route>

                <Route path='/jobs/:id' element={<ProtectRoute Component={JobsItemDetails}/>}></Route>

                <Route path='/login' element={<Login/>}></Route>

                <Route path='/*' element={<NotFound/>}></Route>

          </Routes>
       


      </div>
    </>
  )
}

export default App
