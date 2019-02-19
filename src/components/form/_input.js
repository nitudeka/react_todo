import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputChangeHandler } from '../../store/actions';

class Input extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  };
  
  render() {
    let classNames = ['form__input'];
    if (this.props.focused) {
      classNames.push('form__input--invalid');
      if (this.props.valid) {
        classNames.push('form__input--valid');
      }
    }
    return (
      <input value={this.props.value}
        onChange={(event) => { this.props.inputChangeHandler(this.props.formName, event.target.value, this.props.inputName, this.props.rules) }}
        className={classNames.join(' ')}
        type={this.props.type}
        placeholder={this.props.placeholder}
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
