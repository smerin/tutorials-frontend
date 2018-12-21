import styled from "styled-components";
import SpeedToggle from "./SpeedToggle";

const PlayButton = styled.button`
  width: 5rem;
  height: 5rem;
  border: 0;
  background: ${({ theme }) => theme.blue};
  color: white;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.blueHover};
  }
`;

class MusicPlayer extends React.Component {
  state = {
    playing: false,
    speed: "normal"
  };

  audioNormal = React.createRef();
  audioSlow = React.createRef();

  playAudio = () => {
    if (!this.state.playing) {
      this.audioNormal.current.play();
    } else {
      this.audioNormal.current.pause();
    }
    this.setState({ playing: !this.state.playing });
  };

  handleSpeedChange = e => {
    this.setState({ speed: e.target.value });
  };

  render() {
    return (
      <div>
        <PlayButton onClick={this.playAudio}>
          {this.state.playing ? "Pause" : "Play"}
        </PlayButton>
        <SpeedToggle
          handleChange={this.handleSpeedChange}
          speed={this.state.speed}
        />
        <audio ref={this.audioNormal}>
          <source src="/static/normal.mp3" type="audio/mpeg" />
          Your browser does not support the audio element
        </audio>

        <audio ref={this.audioSlow}>
          <source src="/static/slow.mp3" type="audio/mpeg" />
          Your browser does not support the audio element
        </audio>
      </div>
    );
  }
}

export default MusicPlayer;
