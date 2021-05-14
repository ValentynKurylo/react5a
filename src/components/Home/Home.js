import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Users from "../Users/Users";
import UserDeatails from "../Users/UserDeatails";
import Comments from "../Comments/Comments";
import CommentDetails from "../Comments/ComentDetails";
export default function Home(){
    return(
        <div>
<Router>
    <div><Link to={'/'}>Home</Link></div>
    <div><Link to={'/users'}>Users</Link></div>
    <div><Link to={'/comments'}>Comments</Link></div>
    <Switch>
        <Route exact={true} path={'/'} render={()=>{return <h1>Home</h1>}}/>
        <Route exact={true} path={'/users'} component={Users}/>
        <Route exact={true} path={'/comments'} component={Comments}/>
        <Route exact={true} path={'/user/:id'} component={UserDeatails}/>
        <Route exact={true} path={'/comment/:id'} component={CommentDetails}/>
    </Switch>
</Router>
        </div>
    )
}