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
    let user = {
      email: localStorage.getItem('email')
    }
    $.get("/api/user_search/" + user.email, (data) => {
        console.log("line 18");
        console.log(data + " line 19");
        if (data === null){
          console.log("entered create person");
          // $.get("/api/user_create/" + user.email, (data) => {
          //   console.log(data);
          // });
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
