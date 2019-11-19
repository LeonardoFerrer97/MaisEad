import auth0 from '../../../node_modules/auth0-js';
import history from './history';
export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dev-d1olx9ru.auth0.com',
    clientID: 'oZ07ZtsCNEwrVbP2DOknH32QVqrfgBLn',
    redirectUri:  'https://maisead.herokuapp.com/callback' ,
    responseType:"token id_token",
    scope: "openid profile email"    ,
  });

  userProfile;

  login = () => {
    this.auth0.authorize();
  }

  // parses the result after authentication from URL hash
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        history.replace('/');
      }
    });
  }

  // Sets user details in localStorage
  setSession = (authResult) => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.getProfile(()=>{})
    // navigate to the home route
    history.replace('/');
  }

  // removes user details from localStorage
  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
  }

  // checks if the user is authenticated
  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getAccessToken = () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return false
    }
    return accessToken;
  }

  getProfile = (cb) => {
    let user;
    let accessToken = this.getAccessToken();
     this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        
        user = profile
      }
      cb(err, profile);
    });
    return user
  }
}