import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import Image from './Image';

/**
 * Image Source, used for detecting the image on drop target
 */
const imageSource = {
  beginDrag(props) {
    return { image: props.imageIndex };
  }
};

/**
 * Collect used by react drag and drop
 */
const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

/**
 * DraggableImage Component
 */
const DraggableImage = (props) => {
  const { connectDragSource } = props;

  return connectDragSource(
    <div style={{ height: '100%', width: '100%', cursor: 'move' }}>
      <Image
        {...props}
      />
    </div>
  );
};

DraggableImage.propTypes = {
  /**
   * Higher order function used to connect the component to dnd backend
   */
  connectDragSource: PropTypes.func.isRequired,
  /**
   * Monitor to detect if component is being dragged
   */
  isDragging: PropTypes.bool.isRequired
};

export default DragSource('image', imageSource, collect)(DraggableImage);
