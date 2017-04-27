import React, { PropTypes as T, Component } from 'react'
import AuthService from '../../../utils/AuthService'
import axios from "axios"

export class BasicAboutYou extends Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }
  constructor(props) {
    super(props);
  }
  handleSubmit(event) {
    event.preventDefault();
    let user_info = { 
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      db_id: this.props.db_id
    };
    axios.post('/api/post_user', user_info)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  render(){
  	const { auth } = this.props
    return (
     <div className="row">
      <h4> First, let's get some basic info about you. </h4>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" required pattern="[a-zA-Z]+" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" required pattern="[a-zA-Z]+" /> 
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <a id="btn-submit" onClick={(event)=>this.handleSubmit(event)} className="waves-effect waves-light btn">submit</a>
        </form>
      </div>
    )
  }
}

export default BasicAboutYou;
