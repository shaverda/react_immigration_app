import React, { PropTypes as T, Component } from 'react'
import AuthService from '../../../utils/AuthService'
import axios from "axios"
import reactDOM from 'react-dom'
import CountrySelect from "react-country-select";

import injectTapEventPlugin  from "react-tap-event-plugin";

// --add these to greencard: "             Country of Citizenship/Nationality
//Date of Last Arrival (mm/dd/yyyy) Current USCIS Status
// U.S. Social Security No. (if any)
// alert(moment("05/22/2012", 'MM/DD/YYYY',true).isValid()); //true

export class CountryInfo extends Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService),
    onSelect: React.PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state=({
      survey_step: "country_info"
    });
    let user = {
      email: localStorage.getItem('email'),
      survey_step: "country_info"
    }
    var update_user_step = (user) => {
      axios.post("/api/update_survey_step/"+ user.email, user)  
        .then( (response) =>{
          let data = response.data;
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    update_user_step(user);
    this.onSelect = this.onSelect.bind(this);

  }
  onSelect(val) {
      console.log("values selected are:", val);
      //you can handle options selected here.
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render(){

  	const { auth } = this.props
    return (
     <div className="row">
      <h4> Next, let's go a little deeper... </h4>
        <form className="col s12" id="info_form">
          <div className="row">
            <div className="input-field col s6">
              <CountrySelect flagImagePath="./images/flags/" onSelect={this.onSelect}/>
            </div>
          </div>
          <a id="btn-submit" onClick={(event)=>this.handleSubmit(event)} className="waves-effect waves-light btn">submit</a>
        </form>

      </div>
    )
  }
}

export default CountryInfo;
