/* Components */

import React, { Component } from 'react';
import {Container, Col, Row} from 'reactstrap';
import BarGraph from './Components/BarGraph.js';
import PieGraph from './Components/PieGraph.js';
import PartnerCountStats from './Components/Stats/PartnerCountStats';


/*Styling */
import 'bootstrap/dist/css/bootstrap.min.css';
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
        agentName: 'Jacob',
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
          <Container className="container">
            <Row className="grey mt-3">              
              {/* # of parners by product */}
              <Col className='stats p-3'>
               <PartnerCountStats />
              </Col>
              <Col className='barGraph p-3'>
                <BarGraph data={this.state.partnerCountGraphData}/>
              </Col>
            </Row>
            <Row className="grey mt-3">
              {/* Calls */}
              <Col className='stats p-3'>
                ***This is info***
              </Col>
              <Col className='barGraph p-3'>
                <PieGraph legendPosition='bottom'/>
              </Col>            
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
