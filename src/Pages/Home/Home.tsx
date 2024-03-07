import Items from "../../Components/Items/Items"
import Sidebar from "../../Components/Sidebar/Sidebar"
import './Home.css'

const Home = ({sidebar}:any) => {
  return (
    <><Sidebar sidebar={sidebar}/>
     <div className={`container ${sidebar?"":'large-container'}`}>
       <Items/></div>
         {sidebar}
    </>
    
    
  )
}

export default Home