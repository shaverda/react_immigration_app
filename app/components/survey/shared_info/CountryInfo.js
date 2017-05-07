import React, { PropTypes as T, Component } from 'react'
import AuthService from '../../../utils/AuthService'
import axios from "axios"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import reactDOM from 'react-dom'

import injectTapEventPlugin  from "react-tap-event-plugin";
injectTapEventPlugin();

// --add these to greencard: "C/O (in care of)Date of Birth (mm/dd/yyyy) Country of Citizenship/Nationality Date of Last Arrival (mm/dd/yyyy) Current USCIS Status
// U.S. Social Security No. (if any)
// alert(moment("05/22/2012", 'MM/DD/YYYY',true).isValid()); //true

export class CountryInfo extends Component {
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
              <input id="first_name" type="text" className="validate" required pattern="[a-zA-Z]+" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <MuiThemeProvider>
                <DatePicker hintText="Portrait Dialog" />
              </MuiThemeProvider>
            </div>
            
          </div>
          <a id="btn-submit" onClick={(event)=>this.handleSubmit(event)} className="waves-effect waves-light btn">submit</a>
        </form>

      </div>
    )
  }
}

export default CountryInfo;
