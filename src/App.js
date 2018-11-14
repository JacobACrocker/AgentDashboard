/* Components */

import React, { Component } from 'react';
import BarGraph from './Components/BarGraph.js';
import PieGraph from './Components/PieGraph.js';


/*Styling */

import './App.css';
/*import './styles/statsAndGraphs.css';*/



class App extends Component {
  state = {
    userInfo:{},
    partnerCountGraphData:{},
  }
  
  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    /* Ajax calls here */
    this.setState({
      userInfo:{
        agentName: 'Jacob'
      }, 
      partnerCountGraphData:{
        labels:['Gametime','Splash','Corn'],
        datasets:[{
          label:'Count',
          data:[500, 250, 125],
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 99, 132, 0.6)',            
          ]
        }]
      },
      outboundCallsData:{
        labels:['Gametime','Splash','Corn'],
        datasets:[{
          label:'Count',
          data:[500, 250, 125],
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ]
        }]
      },
      inboundCallsData:{
        labels:['Gametime','Splash','Corn'],
        datasets:[{
          label:'Count',
          data:[500, 250, 125],
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ]
        }]
      },
      chatData:{
        labels:['Gametime','Splash','Corn'],
        datasets:[{
          label:'Count',
          data:[500, 250, 125],
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ]
        }]
      },
      agentScoreData:{
        labels:['Gametime','Splash','Corn'],
        datasets:[{
          label:'Count',
          data:[500, 250, 125],
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ]
        }]
      },
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            {this.state.userInfo.agentName}'s Dashboard
          </h1>
        </header>
        <div className="wrapper">          
          <div classname="border"></div>
          <div className="dataWrapper">
            <div className="statsAndGraph">
              {/* # of parners by product */}
              <div className='stats'>
                ***This is info***
              </div>
              <BarGraph data={this.state.partnerCountGraphData}/>
            </div>
            <div className="statsAndGraph">
              {/* Calls */}
              <div className='stats'>
                ***This is info***
              </div>
              <PieGraph legendPosition='bottom'/>
              {/*            
              response time: <LineGraph />
              */}              
            </div>
          </div>          
          <div classname="border"></div>
        </div>
      </div>
    );
  }
}

export default App;
