import React from "react";

class PartnerCountStats extends React.Component { 
 
  render() {
    return (
      <div>
        <h4>Partner Count by Product</h4>
        {this.props.data.labels.map((label, i) => <div key={i}>Partner {i+1}: {label}</div>)}
      </div>
    );
  }
}

export default PartnerCountStats;