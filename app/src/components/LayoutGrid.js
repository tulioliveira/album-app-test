import React, { Component } from 'react';
import _ from 'lodash';
import RGL, { WidthProvider } from 'react-grid-layout';
import Image from './Image';

const ReactGridLayout = WidthProvider(RGL);

class LayoutGrid extends Component {
  static defaultProps = {
    isDraggable: false,
    isResizable: false,
    items: 0,
    cols: 12,
    rowHeight: 30,
  };

  generateImages() {
    const { grid, sheet } = this.props;
    return _.map(grid, (image, index) => (
      <Image key={index} imageIndex={sheet[index]} />
    ));
  }

  render() {
    return (
      <ReactGridLayout
        {...this.props}
      >
        {this.generateImages()}
      </ReactGridLayout>
    );
  }
}

export default LayoutGrid;
