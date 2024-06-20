import { useEffect, useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
interface Cat{
  slog:string 
  name:string
  url:string
}
const Sidebar = ({sidebar}:any) => {
  const [data,setData] = useState<Cat[]>([]);
  const fetchData = async () => {
    try {
      const videoList_url = `https://dummyjson.com/products/categories`;
      const response = await fetch(videoList_url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const jsonData = await response.json();
      setData(jsonData);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(()=>{
   fetchData();
  },[])
  if(data.length==0){return(<p>Loading.....O</p>)}
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
       <div className="sortcut-links">
        {
         
        data.map((item,index)=>{
          return(
         <Link to ={`/category/${item.name}`} className='text-decoration-none list-item'>
           <p>{item.name}</p>
         </Link>
          )
        })}
       </div> 
      <hr />
    </div>
 
  )
}

export default Sidebar