import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import Mechant from "../screens/mechant";
import Vilain from "../screens/vilain";
import Nav from "../Nav/Nav";

const Routes = () => {

    return (
        
            <Router>
                <Nav/>
                    <Route exact path="/">
                        <Mechant></Mechant>
                    </Route>
                    <PrivateRoute exact path="/:id">
                        <Vilain/>
                    </PrivateRoute>
            </Router>
    );}

function PrivateRoute({ children, ...rest }) {
    const isToken = localStorage.getItem('token')
    return (
    <Route
        {...rest}
        render={({ location }) =>
        isToken? (
            children
        ) : (
            <Redirect
            to={{
                pathname: "/",
                state: { from: location }
            }}
            />
        )
        }
    />)
}


export default Routes;