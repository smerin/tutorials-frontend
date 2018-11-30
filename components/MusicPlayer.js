class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }
  playAudio = () => {
    this.audioRef.play();
  };
  render() {
    return (
      <div>
        <button onClick={this.playAudio}>Play</button>
        <audio ref={this.audioRef}>
          <source src="/static/airhorn.mp3" type="audio/mpeg" />
          Your browser does not support the audio element
        </audio>
      </div>
    );
  }
}

export default MusicPlayer;
