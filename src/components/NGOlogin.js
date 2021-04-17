import React, { Fragment } from 'react';

class NGOLoginForm extends React.Component{

    constructor(){
        super();
    }
    render(){
        return(
            <Fragment>
             <div className="app">
                <div className="card" style={{width:"40vw",margin:"auto"}}>
                <div style={{width:"100%",background: "linear-gradient(90deg, rgba(207,246,58,1) 3%, rgba(156,237,223,1) 63%, rgba(0,212,255,1) 100%)",margin:"12px"}}>
                            <h5 className="card-title">NGO Login</h5>
                            <h6 className="card-subtitle mb-2 text-muted"></h6>
                        </div>
                    <div className="card-body">
                        <form style={{margin:"auto"}}>
                        <div className="form-group">
                            <label>Email</label>
                            <input style={{width:"30vw"}} type="email" className="form-control" placeholder="Email of your NGO"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input style={{width:"30vw"}} type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-outline-info">Login</button>
                        </form>
                    </div>
                </div>
                </div>
            </Fragment>
        );
    }
}
export default NGOLoginForm;