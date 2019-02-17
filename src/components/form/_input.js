import React, { Component } from 'react';

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
      <input value={this.props.value} onChange={this.props.onChange} className={classNames.join(' ')} type={this.props.type} placeholder={this.props.placeholder} />
    )
  }
}

export default Input;
