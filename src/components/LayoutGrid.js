import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RGL, { WidthProvider } from 'react-grid-layout';
import SheetImage from '../containers/SheetImage';
import { getDisplayGrid } from '../providers/layout';

const ReactGridLayout = WidthProvider(RGL);

/**
 * Layout Grid Component, responsible for rendering the sheet images correctly.
 * Uses the React Grid Layout component.
 */
class LayoutGrid extends Component {
  state = { width: 0, height: 0 };

  static propTypes = {
    /**
     * Grid rendered through layout definition
     */
    grid: PropTypes.array.isRequired,
    /**
     * Sheet images array
     */
    sheet: PropTypes.array.isRequired
  }

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

  /**
   * Update the component height and width state, used for correct rendering
   */
  updateWindowDimensions() {
    this.setState({
      width: (window.innerWidth * 0.8),
      height: (window.innerWidth * 0.4)
    });
  }

  /**
   * Generate image components from grid and sheet data
   * @return {array} - Array of React Components for rendering the sheet's images
   */
  generateImages() {
    const { grid, sheet } = this.props;

    return _.map(grid, (image, index) => (
      <SheetImage key={image.i} sheetIndex={index} imageIndex={sheet[index]} />
    ));
  }

  render() {
    const { width, height } = this.state;
    const { grid, sheet } = this.props;
    const {
      data,
      cols,
      rows,
      paddingVertical
    } = getDisplayGrid(grid, height);

    return (
      <ReactGridLayout
        margin={[0, 0]}
        containerPadding={[0, (paddingVertical / 2)]}
        width={width}
        rowHeight={(height - paddingVertical) / rows}
        compactType={null}
        isDraggable={false}
        isResizable={false}
        cols={cols}
        items={sheet.length}
        layout={data}
        {...this.props}
      >
        {this.generateImages()}
      </ReactGridLayout>
    );
  }
}

export default LayoutGrid;
