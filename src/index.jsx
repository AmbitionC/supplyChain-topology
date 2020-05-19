import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from './components/demo.jsx';
import './css/main.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BarChart />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));