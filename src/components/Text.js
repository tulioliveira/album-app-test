import styled from 'styled-components';
import { isTextAlignProperty } from '../providers/styles';

/**
 * Text UI Component
 */
const Text = styled.span`
  /**
   * "letterSpacing" prop mapped to letter-spacing property
   */
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : 0)};
  /**
   * "size" prop mapped to font-size property
   */
  font-size: ${props => (props.size ? props.size : '1rem')};
  /**
   * change font-weight to bold if "bold" prop is defined
   */
  font-weight: ${props => (props.bold ? 'bold' : 'regular')};
  /**
   * "textAlign" prop mapped to text-align property
   */
  text-align: ${props => (isTextAlignProperty(props.textAlign) ? props.textAlign : 'left')};
  /**
   * "margin" prop mapped to margin property
   */
  margin: ${props => (props.margin ? props.margin : 0)};
`;

export default Text;
