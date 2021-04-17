import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Data from './Data';
import Form from './Form';
import Transactions from './Transactions';
import About from './About';
import Regression from './Regression';
import Navbar from './Navbar';
import NGORegistrationForm from "./NGOregister"
import NGOLoginForm from "./NGOlogin"
import AllNGOs from "./AllNGOsDisplay"
import NGOprojects from "./NGOprojects"
export class App extends Component {
    render() {
        return (
            <>
            <Router>
            <Navbar />
            <Route exact path="/DMS/" component={About}/>
            <Route exact path="/DMS/form" component={Form}/>
            <Route exact path="/DMS/transactions" component={Transactions}/>
            <Route exact path="/DMS/data" component={Data}/>
            <Route exact path="/DMS/regression" component={Regression}/>
            <Route exact path="/DMS/register" component={NGORegistrationForm}/>
            <Route exact path="/DMS/login" component={NGOLoginForm}/>
            <Route exact path="/DMS/all" component={AllNGOs}/>
            <Route exact path="/DMS/projects" component={NGOprojects}/>
            </Router>
            </>
        )
    }
}

export default App
