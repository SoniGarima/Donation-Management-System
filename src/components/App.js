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
            <Route exact path="/" component={About}/>
            <Route exact path="/form" component={Form}/>
            <Route exact path="/transactions" component={Transactions}/>
            <Route exact path="/data" component={Data}/>
            <Route exact path="/regression" component={Regression}/>
            <Route exact path="/register" component={NGORegistrationForm}/>
            <Route exact path="/login" component={NGOLoginForm}/>
            <Route exact path="/all" component={AllNGOs}/>
            <Route exact path="/projects" component={NGOprojects}/>
            </Router>
            </>
        )
    }
}

export default App
