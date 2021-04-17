import React, { Component,Fragment } from "react";
import data from '../data';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      feeds:data(),
    };
      }
 
  componentDidMount() {
      this.setState({
        feeds: data(),
      });
  }

  render() {
    return (
      <Fragment>
      <div className="app">   
        
        <h2 style={{color:"white"}} className="text-center">All the Transactions made</h2>
        <div id="main-charts">
        <table className="table table-dark table-striped text-center">
        
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount </th>
          </tr>
        </thead>
        <tbody>
          {this.state.feeds[1].data.map((data) => (
            <tr key={data.label}>
              <td>{data.label}</td>
              <td>{data.value}</td>
              
            </tr>
          ))}
        </tbody>
        </table>
        </div>
      </div>
      </Fragment>
    );
    
  }
}

export default Transactions;
