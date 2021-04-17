import React, { Component, Fragment } from 'react';
import Chart from "chart.js";
import regression from 'regression';

export class Regression extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            
          };
          
      };
   
componentDidMount(){
    Chart.defaults.global.defaultFontColor = "#FFFFFF6F";
    Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
      this.setState({
        
      });
        var resultLineChart = {
            "series": ["Big Dollars", "Medium Dollars", "Small Dollars", "Very Small Dollars"],
            "labels": [
              "janv. 2014", "févr. 2014", "mars 2014", "avr. 2014", "mai 2014", "juin 2014", "juil. 2014", "août 2014", "sept. 2014", "oct. 2014", "nov. 2014", "déc. 2014", "janv. 2015", "févr. 2015", "mars 2015", "avr. 2015", "mai 2015", "juin 2015", "juil. 2015", "août 2015", "sept. 2015", "oct. 2015", "nov. 2015", "déc. 2015", "janv. 2016", "févr. 2016", "mars 2016", "avr. 2016", "mai 2016", "juin 2016"
            ],
            "data": [
              [2.16, 2.84, 2.39, 2.13, 1.65, 2.79, 2.62, 2.34, 2.36, 2.14, 2.77, 2.54, 3.5, 2.73, 2.79, 2.71, 3.42, 2.89, 2.73, 2.39, 3.02, 3.53, 3.11, 2.74, 2.94, 3.24, 3.83, 3.29, 3.05, 3.69],
              [56, 71, 31, 34, 33, 39, 81, 28, 66, 113, 94, 109, 112, 109, 167, 146, 123, 127, 109, 43, 169, 180, 177, 153, 179, 194, 214, 197, 140, 140],
            ]
          };
          
          const getRegression = (data, degre) => {
            degre = degre || 2;
            let dataRegression = [];
            data.forEach((element, index) => dataRegression.push([index + 1, element]));
            
            let resultRegression = [];
            const result = regression.polynomial(dataRegression,{ order: degre });
            //console.log(result)
            result.points.forEach((element) =>
              resultRegression.push(Math.ceil(element[1] * 100) / 100)
            );
            return resultRegression;
          };
          
          let reportsRegression = getRegression(resultLineChart.data[0], 4);
          resultLineChart.data.push([]);
          reportsRegression.forEach(function(item) {
            resultLineChart.data[2].push(item)
          });
          
          let commitsRegression = getRegression(resultLineChart.data[1], 3);
          resultLineChart.data.push([]);
          commitsRegression.forEach(function(item) {
            resultLineChart.data[3].push(item)
          });
          
          var lineChartData = {
            labels: resultLineChart.labels,
            datasets: [{
              // Nombre moyen de reports par correction
              label: resultLineChart.series[0],
              backgroundColor: "rgba(255, 108, 110, 0.1)",
              borderColor: "rgba(255, 108, 110, 1)",
              pointBackgroundColor: "rgba(255, 108, 110, 0.5)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: "rgba(255, 108, 110, 0.5)",
              pointBorderWidth: 1,
              yAxisID: 'y-axis-1',
              data: resultLineChart.data[0]
            }, {
              label: resultLineChart.series[1],
              backgroundColor: "rgba(50, 155, 255, 0.2)",
              borderColor: "rgba(50, 155, 255, 1)",
              pointBackgroundColor: "rgba(50, 155, 255, 0.5)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: "rgba(50, 155, 255, 0.5)",
              pointBorderWidth: 1,
              yAxisID: 'y-axis-2',
              data: resultLineChart.data[1]
            }, {
              // Régression linéaire nb moyen de reports 
              label: resultLineChart.series[2],
              fill: false,
              backgroundColor: "rgba(255, 168, 110, 0.2)",
              borderColor: "rgba(255, 168, 110, 1)",
              pointBackgroundColor: "rgba(255, 168, 110, 1)",
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: "rgba(255, 168, 110, 1)",
              borderWidth: 2,
              pointHitRadius: 5,
              pointRadius: 0.5,
              yAxisID: 'y-axis-1',
              data: resultLineChart.data[2]
            }, {
              // 
              label: resultLineChart.series[3],
              backgroundColor: "rgba(50, 215, 255, 0.2)",
              borderColor: "rgba(50, 215, 255, 1)",
              pointBackgroundColor: "rgba(50, 215, 255, 1)",
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: "rgba(50, 215, 255, 1)",
              borderWidth: 2,
              pointHitRadius: 5,
              pointRadius: 0.5,
              yAxisID: 'y-axis-2',
              data: resultLineChart.data[3]
            }]
          };
          
          var configLineChart = {
            type: 'line',
            data: lineChartData,
            options: {
              tooltips: {
                mode: 'label',
                bodySpacing: 6,
                titleMarginBottom: 10,
                titleFontSize: 14,
                bodyFontSize: 14
              },
              hover: {
                mode: 'dataset'
              },
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                  id: 'y-axis-1',
                  type: 'linear',
                  position: "left",
                  ticks: {
                    beginAtZero: true,
                    //stepSize: 15
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0.06)",
                    zeroLineColor: "rgba(0,0,0,0.1)",
                    offsetGridLines: false
                  }
                }, {
                  id: 'y-axis-2',
                  type: 'linear',
                  position: 'right',
                  ticks: {
                    beginAtZero: true,
                    //stepSize: 15
                  },
                  gridLines: {
                    drawOnChartArea: false
                  }
                }],
                xAxes: [{
                  ticks: {
                    minRotation: 35,
                    maxRotation: 60
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0.06)",
                    zeroLineColor: "rgba(0,0,0,0.1)",
                    offsetGridLines: false
                  }
                }]
              },
              elements: {
                line: {
                  borderWidth: 2
                },
                point: {
                  radius: 4,
                  borderColor: "#ffffff",
                }
              },
              legend: {
                display: true, // default
                position: 'bottom',
                labels: {
                  boxWidth: 20,
                  padding: 20
                }
              }
            }
          };
          
          var ctxLineChart = document.getElementById("lineChart").getContext("2d");
          new Chart(ctxLineChart, configLineChart);
        }
          render() {
        return (
            <Fragment>
            <div className="app">
            <div id="main-charts" className="lineChartContainer">
            <canvas id="lineChart"></canvas>
            <br></br>
            <h5 style={{color:'white'}}>Regression is a statistical method used in finance, investing, and other disciplines that attempts to determine the strength and character of the relationship between one dependent variable (usually denoted by Y) and a series of other variables (known as independent variables).</h5>
          </div>
          </div>
          </Fragment>
        )
    }
}

export default Regression
