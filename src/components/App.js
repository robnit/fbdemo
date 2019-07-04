import React, { PureComponent } from 'react'
import Grid from './Grid';
import { toggle, generateGrid } from '../utils'

class App extends PureComponent {
  state = { grid: [] };

  componentDidMount() {
    this.setState({ grid: generateGrid(15) })
  }

  handleToggle = (row, col) => {
    this.setState({ grid: toggle(row, col, this.state.grid) })
  }

  renderGrid = () => this.state.grid.map((rowContents, index) => {
    return (
      <div key={index} className="row justify-content-center">
        <Grid boxes={rowContents} rowIndex={index} handleToggle={this.handleToggle}/>
      </div>
    );
  });


  render() {
    return (
      <div className="container mt-3">
        { this.renderGrid() }
      </div>
    );
  }
}

export default App;
