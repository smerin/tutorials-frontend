import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Spinner from "../misc/Spinner";

const StyledButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${props => props.theme.blue};
  color: white;
  border: 0;
  font-weight: 700;
  line-height: 1.4em;
  transition: background 0.5s ease;
  cursor: pointer;

  &:focus,
  &:hover {
    background: ${props => props.theme.blueHover};
    color: white;
  }

  .spinner {
    zoom: 0.55;
    position: absolute;
    top: 50%;
    right: 1.25rem;
    // opacity: 0;
    transform: translateY(-50%);
    // transition: opacity 0.3s ease;
  }
`;

const Button = ({
  id,
  type,
  className,
  isFullWidth,
  isPrimary,
  isSecondary,
  isDark,
  isSubmitting,
  handleClick,
  children
}) => {
  return (
    <StyledButton id={id} type={type} onClick={handleClick}>
      <span className="button__text">{children}</span>
      {isSubmitting && <Spinner color="white" />}
    </StyledButton>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isFullWidth: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  handleClick: PropTypes.func
};

export default Button;
