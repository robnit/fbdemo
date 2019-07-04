import React, { PureComponent } from 'react'
import Box from './Box';
import { toggle, generateGrid } from './utils'

class App extends PureComponent {
  state = { grid: [] };

  componentDidMount() {
    this.setState({ grid: generateGrid(15) })
  }

  renderRow = (boxes, rowIndex) => {
    return (
      <div key={`rowIndex_${rowIndex}`} className="row justify-content-center">
        { boxes.map((value, columnIndex) => {
          const handleClick = () => this.handleToggle(rowIndex, columnIndex, this.state.grid);
          return (
            <div key={`row_${rowIndex}_col${columnIndex}`}>
              <Box keyProp={`row_${rowIndex}_col${columnIndex}`} onClick={handleClick} on={ value } />
            </div>
          );
        }) }
      </div>
    );
  }

  handleToggle = (row, col, grid) => {
    this.setState({ grid: toggle(row, col, grid) })
  }

  render() {
    return (
      <div className="container mt-3">
        { this.state.grid.map((row, index) => {
          return this.renderRow(row, index)
        }) }
      </div>
    );
  }
}

export default App;
