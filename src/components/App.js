import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row.js';
// import { generateBoxes } from '../api';
import { watchGrid } from '../redux/actions.js';

function mapStateToProps(state) {
  return {
    gridSize: state.size,
  };
}

const mapDispatchToProps = (dispatch) => {
  const unsubscribe = watchGrid(dispatch);
  return { unsubscribe };
};

class App extends Component {
  static defaultProps = { gridSize: 0 }

  componentDidMount() {
    // document.addEventListener('keydown', e => {
    //   if (e.isComposing || e.keyCode === 88) generateBoxes();
    // });
  }

  componentWillUnmount() {
    this.props.unsubscribe();
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
      <div className="container mt-3">
        { this.renderGrid() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
