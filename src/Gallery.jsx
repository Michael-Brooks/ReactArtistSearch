import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super();
    this.state = {
      playingURL: '',
      audio: null,
      playing: false,
    }
  }
  handlePlayAudio(previewURL) {
    let audio = new Audio(previewURL);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        playingURL: previewURL,
        audio
      });
    } else {
      if (this.state.playingURL === previewURL) {

        this.state.audio.pause();
        this.setState({
          playing: false,
        });
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          playingURL: previewURL,
          audio,
        });
      }
    }
  }

  render() {
    const { tracks } = this.props;

    return (
      <div>{ tracks.map((track, index) => {
        const trackImg = track.album.images[0].url;

        return (
          <div key={ index } className="track" onClick={ () => this.handlePlayAudio(track.preview_url) }>
            <img src={ trackImg } className="track-img" alt="track"/>
            <div className="track-play">
              <div className="track-play-inner">
                {
                  this.state.playingURL === track.preview_url
                    ? <span>| |</span>
                    : <span>&#9654;</span>
                }
              </div>
            </div>
            <p className="track-text">{ track.name }</p>
          </div>
        );
      }) }</div>
    );
  }
}

export default Gallery;