import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.jpg'
import './Navbar.css'
import menu from  '../../assets/menu.png'
import search_icon from '../../assets/search.png'
import { useState } from 'react'
import Cart from '../../assets/cart.png'
const Navbar = ({setSidebar}:any) => {

   const [searchQuery,setSearchQuery] =useState('');
   const [products, setProducts] = useState([]);
   const handleSearch = async () => {
    if (searchQuery.trim() === '') {
        return;
    }

    const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
    const data = await response.json();
    setProducts(data.products);
    console.log(products);
    //setTotalProducts(data.total);
   // setCurrentPage(1); 
};

  return (

    <nav className='flex-div'>
    <div className='nav-left flex-div'>
       <img className='menu-icon' src={menu} alt="menuicon" onClick={()=>setSidebar((prevs: boolean)=>prevs===false?true:false)} />
    
     <Link to='/'>  <img className='logo' src={logo} alt="youtubelogo" /></Link> 
     <h2>E commerce</h2>
    </div>

    <div className='nav-middle flex-div'>
      <div className="search-box flex-div"><input type="text"placeholder='Search' name="" id="search" value={searchQuery}  onChange={(e)=>{setSearchQuery(e.target.value)}} />
      <Link to={`/search/${searchQuery}`}><img src={search_icon} alt="search icon" onClick={handleSearch}/></Link> 
       </div> 
        <Link to={'/cart'}><img src={Cart} alt="" className='cart-icon' title='Cart' />  </Link> 
    </div>

    
</nav>
   
  
  )
}

export default Navbar