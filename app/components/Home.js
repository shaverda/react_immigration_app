import React, { PropTypes as T, Component } from 'react'
import AuthService from '../utils/AuthService'

export class Home extends Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render(){
  	const { auth } = this.props
  	{console.log(this.props)}
    return (
    	<div>
			<div>   

			  <p>What we do: Help connect lawyers and immigrants. </p>
			  <p>Why? How? </p>
			  <p>1. Users looking for help with confusing green card or U.S. citizenship forms instead fill out our simple survey.</p>
			  <p>2. Lawyers review and process everything for USCIS.</p>
			  <hr />

			  <p>Are you a pro bono lawyer looking to get involved? Please email <a href="mailto:shaverda@gmail.com?Subject=Lawyer%20help" target="_top">shaverda@gmail.com</a> for more information.</p>
			</div>

			<div id="login">
			  <h4>Ready to get started?</h4>
			  <a id="btn-login" onClick={auth.login.bind(this)} className="waves-effect waves-light btn">login</a>
			</div>
		</div>
    )
  }
}

export default Home;
