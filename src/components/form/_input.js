/*
 * Custom inputs for the forms
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// handle when the input changes (validate, store the input values in the redux store)
import { inputChangeHandler } from '../../store/actions';

class Input extends Component {
  // prevent unnecessery update of the component
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  };

  render() {
    const {
      inputChangeHandler, formName, inputName, rules, value, type, placeholder
    } = this.props;
    let classNames = ['form__input'];
    if (this.props.focused) {
      classNames.push('form__input--invalid');
      if (this.props.valid) {
        classNames.push('form__input--valid');
      };
    };

    return (
      <input value={value}
        onChange={(event) => {
          inputChangeHandler(formName, event.target.value, inputName, rules) }
        }
        className={classNames.join(' ')}
        type={type}
        placeholder={placeholder}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputChangeHandler: (formName, inputValue, inputName, rules) => {
    dispatch(inputChangeHandler(formName, inputValue, inputName, rules))
  }
});

export default connect(null, mapDispatchToProps)(Input);
