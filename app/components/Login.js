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
        <p> hi!!!!! </p>
        <h2>Login</h2>
      </div>
    )
  }
}

export default Login;