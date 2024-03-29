import React from 'react';
import styled from 'styled-components';
import Column from './Column';
import DraggableImage from './DraggableImage';
import Text from './Text';

/**
 * Avaliable Image Roll Wrapper
 */
const ImageRollWrapper = styled.div`
  display: flex;
  flex: 1 0;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & div {
    flex-basis: 100%;
    height: 65%;
    margin: 2rem 1rem;
  }
`;

/**
 * Text Wrapper for margin
 */
const TextWrapper = styled.div`
  margin-bottom: 0.5rem;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

/**
 * Container
 */
const Container = styled(Column)`
  flex: 6 0;
  height: 100%;
  align-items: center;
  justify-content: space-around;

  &:hover ${TextWrapper} {
    opacity: 1;
  }
`;

const ImageRoll = () => (
  <Container>
    <ImageRollWrapper>
      <DraggableImage imageIndex="1" />
      <DraggableImage imageIndex="2" />
      <DraggableImage imageIndex="3" />
      <DraggableImage imageIndex="4" />
    </ImageRollWrapper>
    <TextWrapper>
      <Text size="1vw" textAlign="left" letterSpacing="0.2vw">DRAG AND DROP IMAGES TO ADD THEM TO THE SHEET</Text>
    </TextWrapper>
  </Container>
);

export default ImageRoll;
