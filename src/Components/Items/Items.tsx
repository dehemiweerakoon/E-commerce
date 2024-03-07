import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Item.css'
interface Product {
  title:string;
  price:number;
  description:string;
  thumbnail:string;
  id:number;
  // Add other properties as needed
}

const Items = () => {
  const [data,setData] = useState<Product[]>([]);
  const fetchData = async () => {
    try {
      const videoList_url = `https://dummyjson.com/products?limit=100`;
      const response = await fetch(videoList_url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const jsonData = await response.json();
      setData(jsonData.products as Product[]);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="feed"> 
    {data.map((item,index)=>{
     return(
          <Link to ={`/item/${item.id}`} className='card'>
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

export default Items