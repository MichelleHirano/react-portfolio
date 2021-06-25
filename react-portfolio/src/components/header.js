import React  from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import About from '../components/about';
import NavBar from '../components/navbar';
import Contact from '../components/contact';
import Portfolio from '../components/portfolio';

function Header() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/about" />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    )
}

export default Header;