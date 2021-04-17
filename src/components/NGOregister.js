import React, { Fragment } from 'react';
import csc from 'country-state-city'

class NGORegistrationForm extends React.Component{

    constructor(){
        super();
        var json_cities = csc.getCitiesOfCountry("IN")
        var len = json_cities.length;
        this.cities_list = [];
        for(var i=0;i<len;i++){
            this.cities_list.push(json_cities[i]["name"])
        }
        console.log(json_cities[0]);
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        window.location.href='/login';
      }
    render(){
        return(
            <Fragment>
                <div class="card" style={{width:"40vw",margin:"auto"}}>
                <div style={{width:"100%",background: "linear-gradient(90deg, rgba(207,246,58,1) 3%, rgba(156,237,223,1) 63%, rgba(0,212,255,1) 100%)",margin:"12px"}}>
                            <h5 class="card-title">NGO Registration</h5>
                            <h6 class="card-subtitle mb-2 text-muted">A different way of managing your NGO</h6>
                        </div>
                    <div class="card-body">
                        <form style={{margin:"auto"}} onSubmit={this.mySubmitHandler}>
                        <div class="form-group">
                            <label >NGO Name</label><br></br>
                            <input style={{width:"30vw"}} type="text" class="form-control" placeholder="Enter the Name of your NGO"/>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input style={{width:"30vw"}} type="email" class="form-control" placeholder="Email of your NGO"/>
                        </div>
                        <div class="form-group">
                            <label>Where is your NGO?</label>
                            <select style={{width:"30vw"}} name="place">
                                <option value="none">---Select---</option>
                                {this.cities_list.map((value,index)=>{
                                    return <option value={value}>{value}</option>
                                })}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="img">Upload Logo of your NGO</label><br></br>
                            <input type="file" id="img" name="img" accept="image/*"/>
                        </div>
                        <div class="form-group">
                            <label>Create a password</label>
                            <input style={{width:"30vw"}} type="password" class="form-control" placeholder="Create a password"/>
                        </div>
                        <button type="submit" class="btn btn-outline-info">Submit</button>
                        </form>
                        <div>
                            Already Registered? Login <a href="/login">here.</a>
                        </div>
                    </div>
                    <div style={{backgroundColor:"skyblue"}}>
                        <h5 style={{margin:"7px"}}>Want to make a donation? Visit <a href="/all">here</a> and make a contribution.</h5>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default NGORegistrationForm;