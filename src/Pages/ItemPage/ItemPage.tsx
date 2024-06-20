import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Product{
  title:string;
  description:string;
  price:number;
  discountPercentage:number;
  rating:number;
  stock:number;
  brand:string;
  images:string[];
  id:number;
}

const ItemPage = () => {
  const {itemid} = useParams();
  const [data,setData] = useState<Product |undefined>();
  let [item,changeItem] =useState(0);
  const fetchData = async () => {
    try {
      console.log(itemid +"hwllo");
      const videoList_url = `https://dummyjson.com/products/${itemid}`;
      const response = await fetch(videoList_url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const jsonData = await response.json();
      setData(jsonData as Product);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleCart =(data:any)=>{
    const cartJson = localStorage.getItem('cart');
    const cart: any[] = cartJson ? JSON.parse(cartJson) : [];
    const isProductExist = cart.find(item=>item.id===data.id);
    if(isProductExist){    
      const updateCart=cart.map(item=>{
        if(item.id===data.id){
          return{
            ...item,
            quantity: item.quantity+1
          }
        }
        return item
      })
     localStorage.setItem('cart',JSON.stringify(updateCart));
     }else{
      localStorage.setItem('cart',JSON.stringify([...cart,{...data,quantity: 1}]));
     }
  }
  useEffect(()=>{
   fetchData(); 
  },[])
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{data?.brand}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{data?.title}</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-lg px-1">Description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p className="leading-relaxed mb-4">{data?.description}</p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Stock</span>
          <span className="ml-auto text-gray-900">{data?.stock}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">discountPercentage</span>
          <span className="ml-auto text-gray-900">{data?.discountPercentage}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Rating</span>
          <span className="ml-auto text-gray-900">  &#9733; {data?.rating}</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-gray-900">0</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${data?.price}</span>
          <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded" onClick={()=>{handleCart(data)}}>Add To cart</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
          
        </div>
        <Link to={"../../cart"} ><button className="flex mt-5 ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">View Cart</button>
      </Link>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`${data?.images[item]}`}
       onClick={()=>{if(item+1===(data?.images.length)){
        item=0
      }else{changeItem(item+1)}}}/>
     
     <div className="items-end  top-100 right-14">
                <Link to="/" className="text-gray-500 hover:text-gray-900">Next &raquo;</Link>
              </div>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default ItemPage