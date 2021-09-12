import React from "react";
import { Container } from 'reactstrap';

var Spinner = require('react-spinkit');

class MiddleComponentSpotify extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: props
    };
  }hideSpinner = () => {
    this.setState({
      loading: false
    });
  };
  render() {
    return (
      <Container className="themed-container" fluid={true}>     
        <main>
      <div className="container wrapper">
        {this.state.loading ? (
          <Spinner
            className="loading text-center"
            name="line-scale-party"
            color="coral"
            fadeIn="none"
          /> 
        ) : null}
        {this.state.user ? <>
       
         <div class="iframe"><p>
          Techno Top 20
           </p>
           </div>
         
         <iframe title="S" 
         src="https://open.spotify.com/embed/playlist/73PUCSgab1AyZx0fRWIlrU" 
         width="100%" 
         height="750px" 
         frameborder="0" 
         onLoad={this.hideSpinner}
         allowtransparency="true" 
         allow="encrypted-media">
         </iframe>
</>:<> <Spinner
            className="loading text-center"
            name="line-scale-party"
            color="coral"
            fadeIn="none"
          />  </> }
      </div>  

      </main>
    </Container>
    
    );
  }
}

export default MiddleComponentSpotify