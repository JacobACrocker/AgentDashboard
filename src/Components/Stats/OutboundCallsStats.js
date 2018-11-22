import React from "react";

class OutboundCallsStats extends React.Component { 
 
  render() {
    return (
      <div>
        <h4>Outbound Calls</h4>
        {/*iterats over the entire array and produces an unordered list
        {this.props.data.labels.map((label, i) => <div key={i}>Partner {i+1}: {label}</div>)}*/}
        <p>
          {this.props.data.labels[0]}: {this.props.data.datasets[0].data[0]}<br/>
          {this.props.data.labels[1]}: {this.props.data.datasets[0].data[1]}<br/>
          {this.props.data.labels[2]}: {this.props.data.datasets[0].data[2]}<br/>
        </p>
      </div>
    );
  }
}

export default OutboundCallsStats;