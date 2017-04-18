import React, { PropTypes as T, Component } from 'react'
import AuthService from '../utils/AuthService'


export class Contact extends Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  handleSubmit(event) {
  	event.preventDefault();
  	let data = {
  		name: document.getElementsByName("Name")[0].value,
  		email: document.getElementsByName("Email Address")[0].value,
  		message: document.getElementById("textarea1").value
  	};
  	$.ajax({
	  type: "POST",
	  url: "/send_email",
	  data: data,
	  success: function(){
	  	console.log("success on client side");
	  },
	});
  }

  render() {
    const { auth } = this.props
    return (
        <div style={{bottom: "10%", margin: "10%", display: "block", opacity: 1, top: "10%"}}>
            <div>
                <div className="row">
                    <div className="col m8">
                        <form action="/send_email" method="post" encType="multipart/form-data">
                            <div className="row">
                                <div className="col s12 input-field">
                                    <i className="material-icons prefix">mail</i>
                                    <input id="icon_prefix" type="text" className="validate" name="Email Address" />
                                    <label htmlFor="icon_prefix">Your Email</label>
                                </div>
                                <div className="col s12 input-field">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" className="validate" name="Name" />
                                    <label htmlFor="icon_prefix">Your Name</label>
                                </div>
                                <div className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">create</i>
                                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                                            <label htmlFor="textarea1">Your Message</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12">
                                    <input type="submit" className="btn btn-large green" value="Send" name="submit" onClick={(event)=>this.handleSubmit(event)} style={{marginLeft: "45px"}} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col m4">
                        <div className="row">
                            <div className="col s12">
                                <p><img src="./images/earth.png" style={{maxWidth: "30%", maxHeight: "30%"}}/></p>
                                <h6 className="light" style={{lineHeight: "130%"}}>Have a question, comment, feature suggestion, or a just want to rant? We're excited to have your feedback.</h6>
                                <h6 className="light" style={{lineHeight: "130%"}}>Send us your message and we'll get back to you as soon as possible.</h6>
                                <h6>email: <b><a href="mailto:shaverda@gmail.com">shaverda@gmail.com</a></b></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}

export default Contact;