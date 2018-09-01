import React, { Component } from 'react';
import _ from 'lodash';
import RGL, { WidthProvider } from 'react-grid-layout';
import SheetImage from '../containers/SheetImage';

const ReactGridLayout = WidthProvider(RGL);

class LayoutGrid extends Component {
  state = { width: 0, height: 0 };

  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: (window.innerWidth * 0.8),
      height: (window.innerWidth * 0.4)
    });
  }

  generateImages() {
    const { grid, sheet } = this.props;

    return _.map(grid, (image, index) => (
      <SheetImage key={image.i} sheetIndex={index} imageIndex={sheet[index]} />
    ));
  }

  render() {
    const { width, height } = this.state;
    const { grid, sheet } = this.props;
    const lastVerticalImage = _.maxBy(grid, image => (image.y + image.h));
    const rowHeight = lastVerticalImage
      ? (height / (lastVerticalImage.y + lastVerticalImage.h))
      : height;
    const largestImage = _.maxBy(grid, 'w');
    let numCols = 1;
    if (largestImage && largestImage.w > 1) {
      const lastHorizontalImage = _.maxBy(grid, image => (image.x + image.w));
      numCols = lastHorizontalImage.x + lastHorizontalImage.w;
    }
    else {
      numCols = sheet.length ? sheet.length : 1;
    }

    return (
      <ReactGridLayout
        margin={[0, 0]}
        width={width}
        rowHeight={rowHeight}
        isDraggable={false}
        isResizable={false}
        cols={numCols}
        items={sheet.length}
        layout={grid}
        {...this.props}
      >
        {this.generateImages()}
      </ReactGridLayout>
    );
  }
}

export default LayoutGrid;
