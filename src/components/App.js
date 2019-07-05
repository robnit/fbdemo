import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Grid from './Grid.js';
import { toggle, generateGrid } from '../utils';
import { getSquares } from '../redux/actions.js';

class App extends PureComponent {
  state = { grid: [] };

  componentDidMount() {
    this.setState({ grid: generateGrid(14) });
    this.props.dispatch(getSquares());
  }

  handleToggle = (row, col) => {
    this.setState({ grid: toggle(row, col, this.state.grid) });
  }

  renderGrid = () => this.state.grid.map((rowContents, index) => {
    return (
      <div key={Math.random()} className="row justify-content-center">
      {/* <div key={index} className="row justify-content-center"> */}
        <Grid boxes={rowContents} rowIndex={index} handleToggle={this.handleToggle}/>
      </div>
    );
  });


  render() {
    return (
      <div className="container mt-1">
        { this.renderGrid() }
      </div>
    );
  }
}

export default connect()(App);
