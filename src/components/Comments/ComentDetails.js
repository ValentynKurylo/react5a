import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function CommentDetails() {
    let params = useParams()
    let [comment, setComment] = useState([])
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/comments/' + params.id).then(value => value.json()).then(value => {
            setComment(value)
        },[])
    })

    return (<div>
        {comment.id} - {comment.name} - {comment.email} - {comment.body}
    </div>)
}