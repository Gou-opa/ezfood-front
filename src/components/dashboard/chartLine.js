/*
*   author @Van Long
*/
import React, {Component} from 'react';
import {Line } from 'react-chartjs-2';

class ChartLine extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:false,
    displayLegend: true,
    legendPosition:'bottom',
  }

  render(){
    return (
      <div className="chart">
        <Line  height={70}
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Doanh thu trong tuần',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default ChartLine;
