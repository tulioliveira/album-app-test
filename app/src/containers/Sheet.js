import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import styled from 'styled-components';
import { FiPlusCircle } from 'react-icons/fi';
import { pushImage, renderLayout } from '../actions';
import LayoutGrid from '../components/LayoutGrid';
import { Text } from '../components';

/**
 * Overlay, appears on hover while dragging
 */
const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 2;
  opacity: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in-out;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
`;

/**
 * Image target event handler
 */
const imageTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    props.handleDrop(Number(item.image));
  }
};

/**
 * Collect used by react drag and drop
 */
const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

/**
 * Sheet Container, responsible for rendering the images added to it based on then
 * layout defined, as well as accept new images dragged onto the container
 */
class Sheet extends Component {
  static propTypes = {
    /**
     * Sheet data from redux level state
     */
    images: PropTypes.array.isRequired,
    /**
     * Function to dispatch new image to redux
     */
    handleDrop: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    /**
     * Higher order function used to connect the component to dnd backend
     */
    connectDropTarget: PropTypes.func.isRequired,
    /**
     * Monitor to detect if dragged component is over target
     */
    isOver: PropTypes.bool.isRequired,
    /**
     * Ggrid used to render LayoutGrid
     */
    grid: PropTypes.array.isRequired
  }

  /**
   * Render overlay if an image is being dragged over the sheet
   */
  renderOverlay = () => {
    const { isOver } = this.props;
    if (isOver) {
      return (
        <Overlay>
          <FiPlusCircle size="40%" />
        </Overlay>
      );
    }
    return null;
  }

  /**
   * Render content based on images already on the sheet
   */
  renderContent = () => {
    const { grid, images } = this.props;
    if (grid.length > 0) {
      return (
        <div
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            color: 'black',
          }}
        >
          <LayoutGrid grid={grid} sheet={images} />
          {this.renderOverlay()}
        </div>
      );
    }
    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          height: '100%',
          width: '100%',
          color: 'black',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text size="3vw" bold>Drag an image here to add it to the sheet</Text>
        {this.renderOverlay()}
      </div>
    );
  }

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(this.renderContent());
  }
}

const mapStateToProps = state => ({
  images: state.sheet,
  grid: state.layout
});

const mapDispatchToProps = dispatch => ({
  handleDrop: (image) => {
    dispatch(pushImage(image));
    dispatch(renderLayout([]));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DropTarget('image', imageTarget, collect)(Sheet));
