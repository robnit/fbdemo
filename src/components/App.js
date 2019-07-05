import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row.js';
import { generateBoxes } from '../redux/actions.js';
import { getGrid } from '../api';

function mapStateToProps(state) {
  return {
    gridSize: state.size,
  };
}

class App extends Component {
  static defaultProps = { gridSize: 0 }

  componentDidMount() {
    this.props.dispatch(generateBoxes());
    getGrid();
  }

  renderGrid = () => {
    const { gridSize } = this.props;
    const baseGrid = [];
    for (let i = 0; i < this.props.gridSize; i++) {
      baseGrid.push(i);
    }

    return baseGrid.map((index) => {
      return (
        <div key={index} className="row justify-content-center">
          <Row rowIndex={index} gridSize={gridSize}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container mt-1">
        { this.renderGrid() }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
