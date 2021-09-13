import React from 'react';
import hash from "./api/hash";

export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    
    try {
     
      const access_token = hash.access_token;
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);
      history.push('/dashboard');
    } catch (error) {
      history.push('/');
    }
  }

  render() {
    return null;
  }
}
