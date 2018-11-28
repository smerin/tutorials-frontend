import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.div`
  position: relative;
  background: ${({ theme }) => theme.mercury};
  width: 100%;
  height: 3.5rem;
  margin-bottom: 0.75rem;
  border-bottom: 4px solid;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.blue : theme.grey};
  transition: all 0.3s ease;

  label {
    position: absolute;
    bottom: 0.75rem;
    left: 1rem;
    color: $dove;
    transform-origin: 0 0;
    transition: all 0.3s ease;
    pointer-events: none;

    ${({ isFocused, isDirty }) =>
      (isFocused || isDirty) &&
      `
        font-weight: 700;
        transform: translateY(-0.8rem) scale(0.75);
      `};
  }

  input {
    display: block;
    width: 100%;
    height: 100%;
    padding: 1.5rem 1rem 0.5rem;
    background: transparent;
    border: 0;
    outline: 0;
    transition: opacity 0.3s ease;
  }
`;

class Input extends Component {
  state = {
    isInvalid: null,
    isValid: null,
    isFocused: null,
    isDirty: null
  };
  checkInputStatus = this.checkInputStatus.bind(this);
  handleFocus = this.handleFocus.bind(this);
  handleBlur = this.handleBlur.bind(this);

  componentDidMount() {
    this.checkInputStatus();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.value !== this.props.value) {
      this.checkInputStatus();
    }
  }

  handleFocus() {
    this.setState({ isFocused: true });
  }

  handleBlur(event) {
    const { error, checkError, handleBlur } = this.props;

    this.setState({ isFocused: false });
    this.checkInputStatus();

    if (error && checkError) {
      checkError(event.target.name);
    }
    if (handleBlur) {
      handleBlur(event);
    }
  }

  checkInputStatus() {
    const { value } = this.props;

    const isDirty = value && value !== "";

    this.setState({ isDirty });
  }

  render() {
    const {
      id,
      name,
      type,
      label,
      value,
      maxLength,
      placeholder,
      disabled,
      autoFocus,
      error,
      errorMessage,
      handleChange
    } = this.props;

    return (
      <div>
        <StyledInput
          isFocused={this.state.isFocused}
          isDirty={this.state.isDirty}
          isInvalid={error}
        >
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            maxLength={maxLength}
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={autoFocus}
            onChange={handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <label htmlFor={id}>{label}</label>
        </StyledInput>
        {error && errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  checkError: PropTypes.func,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func.isRequired
};

export default Input;
