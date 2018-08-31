import styled from 'styled-components';
import { colors } from '../providers/styles';

/**
 * Title UI Component
 */
const Title = styled.span`
  /**
   * Change display to inline if "inline" prop is defined
   */
  display: ${props => (props.inline ? 'inline' : 'block')};
  /**
   * "size" prop mapped to font-size property
   */
  font-size: ${props => (props.size ? props.size : '2rem')};
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${colors.primary}
`;

export default Title;
