import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Grid from './Grid.js';
import { getSquares } from '../redux/actions.js';

function mapStateToProps(state) {
  return {
    gridLength: Object.keys(state.grid).length,
    grid: state.grid,
  };
}

class App extends PureComponent {
  static defaultProps = { grid: [] }

  componentDidMount() {
    this.props.dispatch(getSquares());
  }

  renderGrid = () => this.props.grid.map((rowContents, index) => {
    return (
      <div key={JSON.stringify(rowContents)} className="row justify-content-center">
        <Grid boxes={rowContents} rowIndex={index}/>
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

export default connect(mapStateToProps)(App);
