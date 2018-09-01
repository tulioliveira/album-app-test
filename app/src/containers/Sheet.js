import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import { pushImage } from '../actions';

/**
 * Image target event handler
 */
const imageTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();

    props.onImageDrop(item.imageIndex);
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
const Sheet = (props) => {
  const { connectDropTarget, sheet } = props;
  return connectDropTarget(
    <div>
      {sheet}
    </div>
  );
};

Sheet.propTypes = {
  /**
   * Sheet data from redux level state
   */
  sheet: PropTypes.array.isRequired,
  /**
   * Function to dispatch new image to redux
   */
  onImageDrop: PropTypes.func.isRequired,
  /**
   * Higher order function used to connect the component to dnd backend
   */
  connectDropTarget: PropTypes.func.isRequired,
  /**
   * Monitor to detect if dragged component is over target
   */
  isOver: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  images: state.sheet
});

const mapDispatchToProps = dispatch => ({
  onImageDrop: (image) => {
    dispatch(pushImage(image));
  }
});

export default DropTarget('image', imageTarget, collect)(connect(mapStateToProps, mapDispatchToProps)(Sheet));
