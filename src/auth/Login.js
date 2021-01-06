import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

export default class Login extends Component {
  constructor({ props, responseGoogle }) {
    super(props, responseGoogle);
    this.state = {
      email: "",
      password: "",
      registrationErrors: ""  
    };
  }
  responseGoogle = async (response) => {
    const profile = await response.getBasicProfile();
    const data = await response.profileObj;
    if (profile.getEmail() === "franklin.oduro@turntabl.io") {
      this.props.handleSuccessfulAuth(data);
      // console.log(profile.getEmail())
    }
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="725380201603-ufaa8n2j9f7ehlf69h3boustf78t5br7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}
