import styled from 'styled-components';
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
  background-position: center;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Image;
