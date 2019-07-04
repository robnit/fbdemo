import React, { PureComponent } from 'react'
import Grid from './Grid';
import Box from './Box';
import { toggle, generateGrid } from './utils'

import './App.css';
import { thisExpression } from '@babel/types';

class App extends PureComponent {
  state = { grid: [] };

  componentDidMount() {
    this.setState({ grid: generateGrid(10) })
  }


  renderRow(boxes) {
    return (
      <div className="row justify-content-center">
        { boxes.map((value) => <Box on={ value } />) }
      </div>
    );
  }

  render() {
    return (
      <div className="container mt-5">
        { this.state.grid.map(this.renderRow) }
      </div>
    );
  }
}

export default App;
