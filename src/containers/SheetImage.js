import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeImage, renderLayout } from '../actions';
import Button from '../components/Button';
import images from '../providers/images';
import { colors } from '../providers/styles';

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
    opacity: 1;
  }
`;

/**
 * Overlay, appears on hover
 */
const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in-out;
  background-color: rgba(0, 0, 0, 0.4);
`;

/**
 * Image index to be used in Layout
 */
const IndexText = styled.span`
  color: white;
  font-size: 3vw;
`;

/**
 * Sheet Image container used for rendering the images added to the sheet
 */
const SheetImage = (props) => {
  const { removeImage, sheetIndex } = props;

  const onRemoveClick = () => {
    removeImage(sheetIndex);
  };

  return (
    <Image {...props}>
      <Overlay>
        <IndexText>{sheetIndex + 1}</IndexText>
        <Button backgroundColor={colors.red} onClick={onRemoveClick}>Remove Image</Button>
      </Overlay>
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
