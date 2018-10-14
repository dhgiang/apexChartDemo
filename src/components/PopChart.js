import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchToHorizontal: false,
      options: {
        chart: {
          background: '#f4f4f4',
          foreColor: '#333'
        },
        xaxis: {
          categories: [
            'NYC',
            'TOR',
            'BUF',
            'MTL',
            'VAN',
            'CAL',
            'LOS',
            'NBC',
            'ABC',
            'CHI'
          ]
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        fill: {
          colors: ['#f44336']
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Hottest tempurature by NA Cities',
          align: 'center',
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: '25px'
          }
        }
      },
      series: [
        {
          name: 'Population',
          data: [84, 25, 34, 11, 100, 54, 74, 84, 92, 102]
        }
      ]
    };
  }

  onClick = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal
          }
        }
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="450"
          width="100%"
        />
        <button onClick={this.onClick}>
          {this.state.options.plotOptions.bar.horizontal ? 
            'Vertical' : 'Horizontal'}
        </button>
      </React.Fragment>
    );
  }
}

export default PopChart;
