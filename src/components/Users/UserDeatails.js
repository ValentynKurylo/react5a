import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function UserDetails() {
    let params = useParams()
    let [user, setUser] = useState([])
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/users/' + params.id).then(value => value.json()).then(value => {
            setUser(value)
        },[])
    })

    return (<div>
        {user.id} - {user.name} - {user.username} - {user.email}
    </div>)
}