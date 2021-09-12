import React from 'react';
import { connect } from 'react-redux';
import { authEndpoint, clientId, redirectUri, scopes } from "./api/config";
import hash from "./api/hash";
import { Container } from 'reactstrap';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0,
      no_data: false,
    };

   }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }
  }

  componentWillUnmount() {
    // clear the interval to save resources
    clearInterval(this.interval);
  }

  render() {
    return (
      <Container className="themed-container" fluid={true}>
          {!this.state.token && (
            <div className="main">
            <div className="spoti-img"></div>
            <a
              className="btn"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a> </div>
          )}
      </Container>
    );
  }
}

export default connect()(Home);