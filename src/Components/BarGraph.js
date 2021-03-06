import React from "react";
import {Bar} from "react-chartjs-2";


class BarGraph extends React.Component {
 

static defaultProps = {
  displayTitle: true,
  displayLegend: true,
  legendPosition: 'left',
}

  render() {
    return (
      <div>
        <Bar
            data={this.props.data}
            /*width={100}
            height={50} */
            options={{
              /*maintainAspectRatio: false*/
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
                /*fontColor: '#000',*/
              },
              layout:{
                padding:{
                  left: 0,
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

export default BarGraph;