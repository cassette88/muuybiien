import React, { Component } from 'react'
import Sites from './stats/Sites';
import Countries from './stats/Countries';
import Devices from './stats/Devices';

export default class Stats extends Component {
    constructor(props){
        super(props);
        this.metricChoice = this.metricChoice.bind(this);
        this.state = {
            metric: <Countries/>
        }
    }

metricChoice(metric){
    switch(metric) {
        case 'Countries':
        this.setState({metric: <Countries/>});
            break;
        case 'Sites':
        this.setState({metric: <Sites/>});
            break;
        case 'Devices':
        this.setState({metric: <Devices/>});
            break;
        default:
            return metric;
    }
}

  render() {
    return (
        <div>
        <div className="d-flex flex-row justify-content-center" >
            <div>
            <ul className="nav justify-content-center">
            <button type="button" className="btn btn-outline-primary nav-item navspace" onClick={this.metricChoice.bind(this, 'Countries')}>Countries</button>
            <button type="button" className="btn btn-outline-primary nav-item navspace" onClick={this.metricChoice.bind(this, 'Sites')}>Sites</button>
            <button type="button" className="btn btn-outline-primary nav-item navspace" onClick={this.metricChoice.bind(this, 'Devices')}>Devices</button>

                </ul>
            
            </div>
        </div>
      <div>
        {this.state.metric}
      </div>
      </div>
    )
  }
}
