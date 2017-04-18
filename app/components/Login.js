import React, { PropTypes as T, Component } from 'react'
import AuthService from '../utils/AuthService'

export class Login extends Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    {console.log(this.props)}
    return (
      <div>
        <h4> hey! you entered a private page! please login before continuing.</h4>
        <div id="login">
          <h4>Ready to get started?</h4>
          <a id="btn-login" onClick={auth.login.bind(this)} className="waves-effect waves-light btn">login</a>
        </div>
      </div>
    )
  }
}

export default Login;