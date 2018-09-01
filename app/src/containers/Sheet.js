import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import { pushImage, renderLayout } from '../actions';

/**
 * Image target event handler
 */
const imageTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    props.handleDrop(Number(item.image), props.images);
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

  render() {
    const {
      connectDropTarget,
      images,
      grid,
      isOver
    } = this.props;
    console.log(images);
    console.log(grid);
    return connectDropTarget(
      <div style={{ height: '100%', width: '100%', color: 'black' }}>
        {isOver ? '1' : '0'}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.sheet,
  grid: state.layout
});

const mapDispatchToProps = dispatch => ({
  handleDrop: (image, images) => {
    dispatch(pushImage(image));
    dispatch(renderLayout([], [...images, image]));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DropTarget('image', imageTarget, collect)(Sheet));
