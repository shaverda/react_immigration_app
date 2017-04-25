import React, { PropTypes as T, Component } from 'react'
import AuthService from '../../utils/AuthService'

export class SurveyContainer extends Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    let user = {
      email: localStorage.getItem('email')
    }
    $.get("/api/user_search/" + user.email, (data) => {
        if (data.length === 0){
          console.log("entered create person");
          $.get("/api/user_create/" + user.email, (data) => {
            console.log(data);
          });
        }
        else {
          console.log("in line 28 in surveycontainer yo");
        }
    });
  }

  render(){
  	const { auth } = this.props
    return (
    <div>
      <p> hi im in suvrye container lol </p>
		</div>
    )
  }
}

export default SurveyContainer;
