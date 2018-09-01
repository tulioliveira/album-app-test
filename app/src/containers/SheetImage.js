import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeImage, renderLayout } from '../actions';
import images from '../providers/images';

/**
 * Image UI component
 */
const Image = styled.div`
  /**
   * Use the prop "imageIndex" to define the image used as background
   */
  background-image: url(${props => (props.imageIndex ? images[props.imageIndex - 1] : images[0])});
  background-size: cover;
  background-position: initial;
  width: 100%;
  height: 100%;

  &:hover div {
    visibility: visible;
  }
`;

const Overlay = styled.div`
  visibility: hidden;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.24);
`;

/**
 * Sheet Image container used for rendering the images added to the sheet
 */
const SheetImage = (props) => {
  const { removeImage, sheetIndex } = props;

  const handleClick = () => {
    removeImage(sheetIndex);
  };

  return (
    <Image onClick={handleClick} {...props}>
      <Overlay />
    </Image>
  );
};

SheetImage.propTypes = {
  /**
   * The sheet image index in Redux state, used to reference it on remove
   */
  sheetIndex: PropTypes.number.isRequired,
  /**
   * Function handle to dispatch remove action to sheet reducer using sheetIndex prop
   */
  removeImage: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  removeImage: (index) => {
    dispatch(removeImage(index));
    dispatch(renderLayout([]));
  }
});

export default connect(null, mapDispatchToProps)(SheetImage);
