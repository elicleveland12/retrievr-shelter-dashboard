import React from 'react';
import '../../App.css';
import {LineChart, XAxis, Tooltip, CartesianGrid, Line} from 'recharts';

const dataOne = [
{ name: 'Jan \'20', uv: 400, amt: 2400 },
{ name: 'Feb \'20', uv: 300, amt: 2400 },
{ name: 'Mar \'20', uv: 400, amt: 2400 },
{ name: 'Apr \'20', uv: 300, amt: 2400 },
{ name: 'May \'20', uv: 200, amt: 2400 },
{ name: 'Jun \'20', uv: 278, amt: 2400 },
{ name: 'Jul \'20', uv: 189, amt: 2400 },
{ name: 'Aug \'20', uv: 400, amt: 2400 },
{ name: 'Sep \'20', uv: 300, amt: 2400 },
{ name: 'Oct \'20', uv: 300, amt: 2400 },
{ name: 'Nov \'20', uv: 200, amt: 2400 },
{ name: 'Dec \'20', uv: 278, amt: 2400 },
];

const dataTwo = [
{ name: 'Jan \'20', pv: 2400, amt: 2400 },
{ name: 'Feb \'20', pv: 4567, amt: 2400 },
{ name: 'Apr \'20', pv: 1398, amt: 2400 },
{ name: 'May \'20', pv: 9800, amt: 2400 },
{ name: 'Jun \'20', pv: 3908, amt: 2400 },
{ name: 'Jul \'20', pv: 4800, amt: 2400 },
];

const dataThree = [
{ name: 'Jan \'20', uv: 400, pv: 2400 },
{ name: 'Feb \'20', uv: 300, pv: 4567 },
{ name: 'Apr \'20', uv: 300, pv: 1398 },
{ name: 'May \'20', uv: 200, pv: 9800 },
{ name: 'Jun \'20', uv: 278, pv: 3908 },
{ name: 'Jul \'20', uv: 189, pv: 4800 },
];

export default class Graphs extends React.Component {

  renderGraphs = () => {
    if (this.props.graph === "adoptions") {
      return (
        <LineChart
          width={500}
          height={300}
          data={dataOne}
          margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      )
    } else if (this.props.graph === "incomingAnimals") {
      return (
        <LineChart
          width={500}
          height={300}
          data={dataTwo}
          margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      )
    } else if (this.props.graph === "donations") {
      return (
        <LineChart
          width={500}
          height={300}
          data={dataThree}
          margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      )
    }
  }

  render() {
    return (
      <div className="graph-container">
        {this.renderGraphs()}
      </div>
    );
  }
}
