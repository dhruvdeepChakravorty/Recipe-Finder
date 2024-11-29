
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Sidebar from './components/Sidebar'
import FavouritePage from './components/FavouritePage'

function App() {

  return (
    <div className='flex'>
     <Sidebar></Sidebar>
     <Routes>
      <Route path='/' element={ <Home></Home>}></Route>
      <Route path='/favourite' element={ <FavouritePage></FavouritePage>}></Route>
     </Routes>
    
    </div>
  )
}

export default App
