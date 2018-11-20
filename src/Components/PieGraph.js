import React from "react";
import {Pie} from "react-chartjs-2";


class PieGraph extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      chartData:{
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
      }
    }
  }


static defaultProps = {
  displayTitle: true,
  displayLegend: true,
  legendPosition: 'right',
}

  render() {
    return (
      <div className='pieGraph'>
        <Pie
            data={this.state.chartData}
            /*width={100}
            height={50} */
            options={{
              /*maintainAspectRatio: false*/
              title:{
                display: this.props.displayTitle,
                text: '# of partners by product',
                fontSize: 25,
              },
              legend:{
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
              labels:{
                display: this.props.lables,
                fontColor: '#000',
              },
              layout:{
                padding:{
                  left: 50,
                  right: 0,
                  bottom: 0,
                  top: 0,
                }
              },
              tooltips:{
                enabled: true,
              }
            }}
          />
      </div>
    );
  }
}

export default PieGraph;