import styled from 'styled-components';
import { colors } from '../providers/styles';

/**
 * Card UI Component
 */
const Card = styled.span`
  margin: 0.5rem 0rem;
  padding: 1rem;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  font-weight: bold;
  /**
   * "color" prop mapped to color property
   */
  color: ${props => (props.color ? props.color : colors.white)};
  /**
   * "backgroundColor" prop mapped to background-color property
   */
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : colors.gray)};
`;

export default Card;
