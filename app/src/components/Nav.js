import styled, { css } from 'styled-components';
import { colors } from '../providers/styles';

/**
 * Nav UI Component
 */
const Nav = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.5rem 1rem;
  font-size: 1rem;
  color: ${colors.primary};
  background: ${colors.gray};
  border: none;
  border-radius: 5rem;
  /**
   * Occupy all of parent width if "fluid" prop is defined
   */
  ${props => props.fluid && css`
    width: calc(100% - 5rem);
  `}
  /**
   * Change color and background-color if "isActive" prop is defined
   */
  ${props => props.isActive && css`
    color: ${colors.white};
    background-color: ${colors.secondary};
  `}
  &:hover {
    /**
     * Change background-color on hover if "isActive" prop is not defined
     */
    ${props => !props.isActive && css`
      background-color: ${colors.darkGray};
    `}
  }
  &:active {
    opacity: 0.6;
  }
`;

export default Nav;
