import {Link} from "react-router-dom";

export default function Comment({item}){
    return(
        <div>
            {item.id} - {item.name} - <Link to={'/comment/'+ item.id}>Details</Link>
        </div>
    )
}