import styled, { css } from 'styled-components';
import { colors } from '../providers/styles';

/**
 * Button UI Component
 */
const Button = styled.button`
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.5rem 1rem;
  font-size: 1rem;
  /**
   * "color" prop mapped to color property
   */
  color: ${props => (props.color ? props.color : colors.white)};
  /**
   * "backgroundColor" prop mapped to background-color property
   */
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : colors.gray)};
  transition: all 0.1s ease;
  border: none;
  border-radius: 0.5rem;
  /**
   * Occupy all of parent width if "fluid" prop is defined
   */
  ${props => props.fluid && css`
    width: calc(100% - 5rem);
  `}
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    opacity: 0.7;
  }
`;

export default Button;
