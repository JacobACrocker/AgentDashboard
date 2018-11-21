import React from "react";
import {Pie} from "react-chartjs-2";


class PieGraph extends React.Component { 

static defaultProps = {
  displayTitle: true,
  displayLegend: true,
  legendPosition: 'right',
}

  render() {
    return (
      <div className='pieGraph'> 
        <Pie
            data={this.props.data}
            
            //width={100}
            //height={50}

            options={{
              //maintainAspectRatio: false
              title:{
                display: this.props.displayTitle,
                text: this.props.data.graphTitle,
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
                  left: 115,
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