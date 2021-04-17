import React, { Component,Fragment } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Doughnut from "./Doughnut";
import data from "../data";
import Chart from "chart.js";
class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds:data()
    };
  }
 

  componentDidMount() {
    Chart.defaults.global.defaultFontColor = "#FFFFFF6F";
    Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
      this.setState({
        feeds: data(),
      });
  }

  render() {
    return (
      <Fragment>  
      <div className="app" id="main-charts">
      <h1 style={{color:"white"}} className="text-center">Data Analysis</h1>
        <div className="main chart-wrapper">  
          <LineChart
            data={this.state.feeds[0].data}
            title={this.state.feeds[0].title}
            color="#ffa600"
          />
        </div>
        <div className="sub-wrapper">
          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.feeds[1].data}
              title={this.state.feeds[1].title}
              color="#955196"
            />
          </div>

          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.feeds[3].data}
              title={this.state.feeds[3].title}
              color="#ff6e54"
            />
          </div>
          <div className="sub chart-wrapper doughnut">
            <Doughnut
              data={this.state.feeds[2].data}
              title={this.state.feeds[2].title}
              colors={[
                "#003f5c",
                "#444e86",
                "#955196",
                "#dd5182",
                "#ff6e54",
                "#ffa600",
              ]}
            />
          </div>
        </div>
        </div>
      
      </Fragment>
    );
    
  }
}

export default Data;
