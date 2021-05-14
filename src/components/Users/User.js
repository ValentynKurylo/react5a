import {Link} from "react-router-dom";

export default function User({item}){
    return(<div>
        {item.id} -- {item.name} -- <Link to={'/user/' + item.id}>Details</Link>
    </div>)
}