import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Search.css'
interface Product {
    title:string;
    price:number;
    description:string;
    thumbnail:string;
    id:number;
    // Add other properties as needed
  }
const Search = () => {
  const {searchQuery} =useParams();
    const [data,setData] = useState<Product[]>([]);
    const handleSearch = async () => {
      if (searchQuery?searchQuery.trim() === '':'') {
          return;
      }
  
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
      const data = await response.json();
      setData(data.products);
      console.log(data);
      //setTotalProducts(data.total);
     // setCurrentPage(1); 
  };
    useEffect(()=>{
      handleSearch();
    },[searchQuery])
    return (
      <div className="feed-search"> 
      {data.map((item,index)=>{
       return(
            <Link to ={`/item/${item.id}`} className='card-search'>
        <img src={`${item.thumbnail}`} alt="" />
        <h2>{item.title}</h2>
        <h3> $  {item.price} </h3>
        <p>{item.description}</p>
     </Link>
    
       )
  })}
   
     
   </div>
    )
}

export default Search