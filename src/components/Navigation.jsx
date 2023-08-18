import { Link } from "react-router-dom"
import { navItems } from "../constant/data"


const Navigation = () => {
  return (
    <div>
    <ul className="flex">
        {
          navItems.map(({id,link,title})=>{
            <li key={id} className="flex gap-10 text-blue-700">
                <Link to={link}>{title}</Link>
            </li>
          })  
        }
    </ul>
      
    </div>
  )
}

export default Navigation
