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
    super(props);
    this.state = {
      form_type: "",
      db_id: ""
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    var chosen_form_type = document.querySelector('input[name="form_type"]:checked').value;
    console.log(chosen_form_type);
    if (chosen_form_type != "none" && chosen_form_type != "unknown"){
      this.setState({
              form_type: chosen_form_type
      })
    }

  }
  componentWillMount(){
    let user = {
      email: localStorage.getItem('email')
    }
    var perform_user_search = (user) => {
      $.get("/api/user_search/" + user.email, (data) => {
          console.log(data);
          if (data.length === 0) { //if no user was found in db
              console.log("entered create person");
              $.get("/api/user_create/" + user.email, (data) => {
                  console.log(data);
                  perform_user_search(user);
              });
          } else if (data[0].form_type) {
              console.log("has chosen app type");
              this.setState({
                form_type: data[0].form_type,
                db_id: data[0]._id
                //todo: create actual div for greencard or naturalization in conditional rendering
              })
          } else if (!data[0].form_type) {
              console.log("has NOT chosen app type");
              this.setState({
                form_type: "none",
                db_id: data[0]._id
              })
          }
          else {
            console.log("something else!");
          }
      });
    }
    perform_user_search(user);
  }

  render(){
  	const { auth } = this.props
    return (
    <div>
      {this.state.form_type === "none" &&
      <div>
        <h5> Welcome. Choose the application you're here to fill out. </h5>
        <h6> If you're not sure, choose "I don't know", and we'll help you figure it out. </h6> 
        <form action="#">
            <p>
              <input name="form_type" type="radio" value="greencard" id="greencard_radio" />
              <label htmlFor="greencard_radio">Greencard/Permanent Residence</label>
            </p>
            <p>
              <input name="form_type" type="radio" value="naturalization" id="naturalization_radio" />
              <label htmlFor="naturalization_radio">Naturalization/Citizenship</label>
            </p>
            <p>
              <input name="form_type" type="radio" value="unknown" id="unknown_form_radio"  />
              <label htmlFor="unknown_form_radio">I don't know! Help!</label>
            </p>
            <a id="btn-submit" onClick={(event)=>this.handleSubmit(event)} className="waves-effect waves-light btn">submit</a>
        </form>
        </div> } 
      {this.state.form_type === "greencard" && <p> here is conditional rendering</p>}
      {this.state.form_type === "naturalization" && <p> here is ADDITIONAL conditional rendering</p>}
		</div>
    )
  }
}

export default SurveyContainer;
