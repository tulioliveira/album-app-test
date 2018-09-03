import styled from 'styled-components';
import { colors } from '../providers/styles';

/**
 * Card UI Component
 */
const Card = styled.div`
  /**
   * If onClick prop is defined, change cursor to pointer
   */
  cursor: ${props => (props.onClick ? 'pointer' : 'auto')};
  margin: 0.5rem 0rem;
  padding: 1rem;
  border-radius: 0.2rem;
  font-size: 1rem;
  font-weight: bold;
  /**
   * "color" prop mapped to color property
   */
  color: ${props => (props.color ? props.color : colors.white)};
  /**
   * "backgroundColor" prop mapped to background-color or type (error, warning,
   * success, info) properties.
   */
  background-color: ${(props) => {
    if (props.backgroundColor) {
      return props.backgroundColor;
    }
    switch (props.type) {
      case 'error':
        return colors.red;
      case 'warning':
        return colors.yellow;
      case 'success':
        return colors.green;
      case 'info':
        return colors.teal;
      default:
        return colors.gray;
    }
  }};
`;

export default Card;
