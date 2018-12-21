import styled from "styled-components";

const RadioButtons = styled.div`
  margin: 1rem 0;

  label {
    margin-right: 1rem;
  }
  input {
    margin-right: 0.5rem;
  }
`;

class SpeedToggle extends React.Component {
  render() {
    const { speed, handleChange } = this.props;

    return (
      <RadioButtons>
        <label>
          <input
            type="radio"
            name="speed"
            value="slow"
            checked={speed === "slow"}
            onChange={handleChange}
          />
          Slow
        </label>
        <label>
          <input
            type="radio"
            name="speed"
            value="normal"
            checked={speed === "normal"}
            onChange={handleChange}
          />
          Fast
        </label>
      </RadioButtons>
    );
  }
}

export default SpeedToggle;
