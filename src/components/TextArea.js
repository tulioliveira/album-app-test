import styled, { css } from 'styled-components';
import { colors } from '../providers/styles';

/**
 * TextArea UI Component
 */
const TextArea = styled.textarea`
  padding: 0.4rem;
  margin: 0rem 1rem;
  font-size: 1rem;
  color: ${colors.black};
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0px 3px 5px rgba(178, 178, 178, 0.42);
  flex: 1;
  /**
   * "height" prop mapped to height property
   */
  height: ${props => (props.height ? props.height : 'auto')};
  /**
   * Take up whole parent width if "fluid" prop is defined
   */
  ${props => props.fluid && css`
    width: calc(100% - 2.2rem);
  `}
  /**
   * If "resizable" prop is not set, component dimensions are fixed
   */
  ${props => !props.resizable && css`
    resize: none;
  `}
`;

export default TextArea;
