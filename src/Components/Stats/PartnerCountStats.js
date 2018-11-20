import React from "react";


class PartnerCountStats extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      data: props.data
    }
  }


static defaultProps = {
}

  render() {
    return (
      <div className='stats' data={this.state.data}>
      </div>
    );
  }
}

export default PartnerCountStats;