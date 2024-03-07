import './Categorypage.css'
import Categoty from '../../Components/Categoty/Categoty'
import Sidebar from '../../Components/Sidebar/Sidebar'

const CategoryPage = ({sidebar}:any) => {
  return (
    <div>
        <Sidebar sidebar={sidebar}/>
     <div className={`container ${sidebar?"":'large-container'}`}>
       <Categoty/>
       </div>
    </div>
  )
}

export default CategoryPage