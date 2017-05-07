import React, { PropTypes as T, Component } from 'react'
import AuthService from '../../../utils/AuthService'
import axios from "axios"
import ReactModal from 'react-modal';

import CountryInfo from "./CountryInfo"


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
    this.state=({
      address: "none",
      showModal: false,
      survey_step: "basic_about_you"
    });
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    var user_info = { 
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      street_number: document.getElementById("street_number").value,
      street_name: document.getElementById("street_name").value,
      city: document.getElementById("city").value, 
      state: document.getElementById("state").value,
      zipcode: document.getElementById("zipcode").value,
      survey_step: "country_info",
      db_id: this.props.db_id
    };

    var is_address_valid = new Promise(
      function(resolve, reject){
        axios.post('/api/validate_address', user_info)
          .then(function (response) {
            var message = "Address is valid";
            if (response.data.length > 0) resolve(message);
            else {
              var reason = "Address is invalid.";
              reject(reason);
            }
          })
      });

    var consume_address_promise = () =>{
      is_address_valid
        .then((valid) =>{
          console.log(valid);
              axios.post('/api/post_user', user_info)
              .then( (response) => {
                console.log(response.data);
                this.setState({
                  survey_step: "country_info"
                });
              })
              .catch( (error) =>{
                console.log(error);
              });
        })
        .catch((error) =>{
          console.log(error);
          document.getElementById("info_form").reset();
          this.handleOpenModal();
        })
    }
    consume_address_promise();
  }

  componentDidMount(){
    Tipped.create('#first_name', 'Your first name, with only letters between A and Z. You will find this on your i-94 in item number 2.');
    Tipped.create('#last_name', 'Your last name/family name, with only letters between A and Z. You will find this on your i-94 in item number 1.');
  }
  render(){

  	const { auth } = this.props
    return (
      <div>

        <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example">
            <h4>Your address was invalid. </h4>
            <p>Your form has been cleared. Please enter a valid address--you will find this on mail received at your home. </p>
            <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      {this.state.survey_step === "basic_about_you" &&
       <div className="row">
        <h4> First, let's get some basic info about you. </h4>
          <form className="col s12" id="info_form">
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
      }
      {this.state.survey_step === "country_info" && <CountryInfo db_id={this.props.db_id}/>}
      </div>
    )
  }
}

export default BasicAboutYou;
