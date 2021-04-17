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
            <Route exact path="/Donation-Management-System/" component={About}/>
            <Route exact path="/Donation-Management-System/form" component={Form}/>
            <Route exact path="/Donation-Management-System/transactions" component={Transactions}/>
            <Route exact path="/Donation-Management-System/data" component={Data}/>
            <Route exact path="/Donation-Management-System/regression" component={Regression}/>
            <Route exact path="/Donation-Management-System/register" component={NGORegistrationForm}/>
            <Route exact path="/Donation-Management-System/login" component={NGOLoginForm}/>
            <Route exact path="/Donation-Management-System/all" component={AllNGOs}/>
            <Route exact path="/Donation-Management-System/projects" component={NGOprojects}/>
            </Router>
            </>
        )
    }
}

export default App
