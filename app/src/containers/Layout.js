import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { renderLayout, resetLayout, resetSheet } from '../actions';
import {
  Row,
  Button,
  TextArea
} from '../components';
import { colors } from '../providers/styles';

/**
 * Button Row for equal width
 */
const ButtonRow = styled(Row)`
  flex-wrap: nowrap;
  & button {
    flex-basis: 100%;
  }
`;

/**
 * Styled Form
 */
const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`;

/**
 * Layout Control Container, responsible for the text area used to define the sheet
 * layout, as well as reseting the sheet
 */
class Layout extends Component {
  state = { value: '' };

  static propTypes = {
    /**
     * Current sheet images
     */
    sheet: PropTypes.array.isRequired,
    /**
     * Function to dispatch the inputted layout for sheet rendering
     */
    onLayoutSubmit: PropTypes.func.isRequired,
    /**
     * Function to dispatch reset actions to layout and sheet reducers
     */
    onClear: PropTypes.func.isRequired
  }

  /**
   * Handle layout text area value change, updating the component state
   * @param {object} event - Text area value change event
   */
   handleChange = (event) => {
     this.setState({ value: event.target.value });
   }

  /**
   * Prevent the form default action after submitting, instead calling the onLayoutRender() function
   * @param {object} event - Form submit event
   */
  onFormSubmit = (event) => {
    const { onLayoutSubmit, sheet } = this.props;
    const { value } = this.state;

    onLayoutSubmit(JSON.parse(value), sheet);
    event.preventDefault();
  }

  render() {
    const { onClear } = this.props;
    const { value } = this.state;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <TextArea placeholder="Layout" value={value} onChange={this.handleChange} fluid />
        <ButtonRow flex="0 1 auto" justifyContent="center">
          <Button backgroundColor={colors.red} onClick={onClear}>Clear Sheet</Button>
          <Button backgroundColor={colors.purple} type="submit">Render Layout</Button>
        </ButtonRow>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  sheet: state.sheet
});

const mapDispatchToProps = dispatch => ({
  onLayoutSubmit: (layout, sheet) => {
    dispatch(renderLayout(layout, sheet));
  },
  onClear: () => {
    dispatch(resetSheet());
    dispatch(resetLayout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
