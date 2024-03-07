import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ItemPage from './Pages/ItemPage/ItemPage'
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Components/Cart/Cart'
import CategoryPage from './Pages/CategoryPage/CategoryPage'
import Search from './Components/Search/Search'

const App = () => {
  const [sidebar,setSidebar] = useState(true);
  
  return (
    
    <><Navbar setSidebar={setSidebar}/>
    
    <Routes>
      <Route path="/" element={<Home sidebar={sidebar}></Home>}/>
      <Route path="/category/:categoryid" element={<CategoryPage sidebar={sidebar}/>}/>
      <Route path="/item/:itemid" element={<ItemPage></ItemPage>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/search/:searchQuery' element={<Search/>}/>
    </Routes>
    </>
  )
}

export default App
