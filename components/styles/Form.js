import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  max-width: 32rem;
  margin: 2rem auto;
  padding: 1.5rem;
  background: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  h2 {
    margin-top: 0;
  }
`;

Form.displayName = "Form";

export default Form;
