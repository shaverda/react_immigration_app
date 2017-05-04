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
      street_number: document.getElementById("street_number").value,
      street_name: document.getElementById("street_name").value,
      city: document.getElementById("city").value, 
      state: document.getElementById("state").value,
      zipcode: document.getElementById("zipcode").value,
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
  componentDidMount(){
    Tipped.create('#first_name', 'Your first name, with only letters between A and Z. You will find this on your i-94 in item number 2.');
    Tipped.create('#last_name', 'Your last name/family name, with only letters between A and Z. You will find this on your i-94 in item number 1.');
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


            <div className="input-field col s6">
              <input id="street_number" type="text" className="validate" required pattern="[0-9]+" /> 
              <label htmlFor="street_number">Street Number</label>
            </div>
            <div className="input-field col s6">
              <input id="street_name" type="text" className="validate" required pattern="[a-zA-Z]+" /> 
              <label htmlFor="street_name">Street Name</label>
            </div>
            <div className="input-field col s6">
              <input id="city" type="text" className="validate" required pattern="[a-zA-Z ]+" /> 
              <label htmlFor="city">City</label>
            </div> 
            <div className="input-field col s6">
              <input id="state" type="text" className="validate" required pattern="[a-zA-Z]+" /> 
              <label htmlFor="state">State</label>
            </div>
            <div className="input-field col s6">
              <input id="zipcode" type="text" className="validate" required pattern="[0-9]+" /> 
              <label htmlFor="zipcode">Zip Code</label>
            </div>   
   


          </div>
          <a id="btn-submit" onClick={(event)=>this.handleSubmit(event)} className="waves-effect waves-light btn">submit</a>
        </form>

      </div>
    )
  }
}

export default BasicAboutYou;
