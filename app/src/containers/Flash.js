import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';
import { removeMessage, resetMessages } from '../actions';
import { Card } from '../components';

const Wrapper = styled.div`
  position: absolute;
  top: 2vh;
  left: 5vw;
  width: 90vw;
  z-index: 2;
`;

/**
 * Flash messages container for displaying activity messages
 */
class Flash extends Component {
  static propTypes = {
    /**
     * Flash messages array
     */
    messages: PropTypes.array.isRequired,
    /**
     * Curried function to remove message on click
     */
    popMessage: PropTypes.func.isRequired,
    /**
     * Function to dispatch the reset action to Redux store
     */
    clearMessages: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { clearMessages } = this.props;
    clearMessages();
  }

  render() {
    const { messages, popMessage } = this.props;

    return (
      <Wrapper>
        {_.map(messages, (item, index) => (
          <Card key={`flashMessage${index}`} type={item.type} onClick={popMessage(index)}>
            {item.message}
          </Card>
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.flash
});

const mapDispatchToProps = dispatch => ({
  popMessage: index => () => {
    dispatch(removeMessage(index));
  },
  clearMessages: () => {
    dispatch(resetMessages());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Flash);
