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
    outboundCallsData:{},
    foo: '',
  }
  
  componentWillMount(){
    this.getData();
  }

  getData(){
    /* Ajax calls here */
    this.setState({
      foo: 'bars',
      userInfo:{
        name: 'Jacob',
        age: 25,
      }, 
      partnerCountGraphData:{
        graphTitle: '# of partners by product',
        labels:['Gametime','Splash','Corn'],
        datasets:[{
          label: 'Count',
          data:[500, 250, 125],
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 99, 132, 0.6)',            
          ],
        }]
      },
      outboundCallsData:{
        graphTitle: '# of calls placed',
        labels:['12 pm','1 pm','2 pm'],
        datasets:[{
          label:'Calls made',
          data:[15, 20, 10],
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
            {this.state.userInfo.name}'s Dashboard
          </h1>
        </header>
        <div className="wrapper">
          <Container className="container">
            <Row className="m-1 mt-3">              
              {/* # of parners by product */}
              <Col className='stats grey m-1' id='partnerCount'>
                <PartnerCountStats user={this.state.userInfo} data={this.state.partnerCountGraphData}/>
              </Col>
              <Col className='barGraph grey m-1'>
                <BarGraph data={this.state.partnerCountGraphData}/>
              </Col>
            </Row>
            <Row className="m-1">
              {/* Calls */}
              <Col className='stats grey m-1'>
                ***This is info***
              </Col>
              <Col className='pieGraph grey m-1'>
                <PieGraph data={this.state.outboundCallsData} foo={this.state.foo}/>
              </Col>            
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
