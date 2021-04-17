import React, {Fragment} from 'react';



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: '',
    };
    
  }
  
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !=="" && !Number(val)) {
        err = <strong>Your donation must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <Fragment>
      <div className="app">
      
        <div className="container">
      <form>
      <h1>Make a Donation</h1>
      <h3 style={{color:"white"}}>{this.state.username}We thank you for your generous contribution of {this.state.age}</h3>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your email:</p>
      <input
        type='email'
        name='email'
        onChange={this.myChangeHandler}
      />
      <p>Enter your mobile:</p>
      <input
        type='phone'
        name='phone'
        onChange={this.myChangeHandler}
      />
      <p>Enter your Donation:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <input type="submit" value="Submit"></input>
      {this.state.errormessage}
      </form>
      </div>
      </div>
      </Fragment>
    );
  }
}

export default Form;
