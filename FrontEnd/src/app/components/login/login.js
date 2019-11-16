import React, { Component, Fragment } from "react";
import { Link, withRouter  } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import TopNav from '../login/topNav';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  

  componentWillReceiveProps(nextProps) {

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
      
      document.getElementById('register-msg-box').style.display="block";
                     document.getElementById('register-msg-box').className = 'alert-danger';
                     document.getElementById('register-msg-box').innerHTML    = nextProps.errors.message;
    }
    else{
      document.getElementById('register-msg-box').style.display="none";
    }
  }

  componentDidMount() {

    document.body.classList.add("t-login-body");
    
    
    // If logged in and user navigates to Register page, should redirect them to dashboard
    /*if (this.props.auth.isAuthenticated) {

          this.props.history.push("/dashboard");
         
     }*/
  }
  
  onChange = e => {
  
    this.setState({ [e.target.id]: e.target.value });
    document.getElementById('register-msg-box').style.display="none";
  };
  
  onSubmit = e => {
    e.preventDefault();
    
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(newUser);

    this.props.registerUser(newUser, this.props.history); 
  
  };
  
  

  render() {
    const { errors } = this.state;
    
    return (
      <React.Fragment>
        <TopNav/>
      <div className="container p-4">
        <div className="row justify-content-center align-items-center h-100">
           <div className="col-md-12">

                <div className="row">
                <div className ="col-md-7 mx-auto bg-white p-3 mt-4 border">
                  <h5 className="p-2" id="register-msg-box" style={{display:'none'}}></h5>  
                  <h5 className="p-2 ml-5 font-weight-bold">Log In to Twitter</h5>
                        <form onSubmit={this.onSubmit} autoComplete="off">
                          
                              <div className="row" id="email-row">
                                  <div className="col-md-5 ml-5">
                                    <div className="form-group">
                                     <input
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="email"
                                        placeholder = "Phone, email or Username"
                                        email="true"
                                        minLength="1"
                                        maxLength="30"
                                        required
                                        className={classnames("t-login-form-control", {
                                          invalid: errors.email
                                        })}
                                      />
                                      
                                    </div>
                                  </div>
                                </div> 

                              <div className="row">
                                <div className="col-md-5 ml-5">   
                                    <div className="form-group has-feedback">
                                      <input
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        required
                                        pattern="^[a-zA-Z]+$"
                                        minLength="1"
                                        maxLength="5"
                                        className={classnames("t-login-form-control", {
                                          invalid: errors.password
                                        })}
                                      />
                                      
                                    </div>
                                  </div> 
                                </div> 

                                <div className="row">
                                   <div className="col-2 ml-5">
                                          <button
                                            type="submit"
                                            className="btn btn-sm t-btn-primary-sign-up"
                                          >
                                            Log in
                                          </button>
                                    </div>
                                    <div className="col-6 form-check">
                                          <input type="checkbox" id="exampleCheck1"/>
                                          <label class="form-check-label t-font-size-14 ml-1 t-icon" for="exampleCheck1">Remember Me</label>
                                          <label class="t-font-size-14 ml-1 t-icon t-app-theme-color">Forgot Password?</label>
                                    </div>
                                </div>    
                    </form>
                    
                    </div>
                    
                    <div className ="col-md-7 mx-auto bg-white p-3 border t-login-footer-background">
                                <h5 className="p-2 ml-5 t-font-size-14">New to Twitter?<span className="t-app-theme-color"><Link to="signUp"> Sign up now ></Link></span></h5>
                    </div>              

                </div>
            </div>
        </div>
      </div>
      </React.Fragment>
    );
  }

}


/*Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};*/

const mapStateToProps = state => ({
  //auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps,{  })(withRouter(Login));