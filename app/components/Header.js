import React, {Component} from "react";

class Header extends Component {
	render() {

		//component stylings
		const navbar_fixed_styles = { boxShadow: "0 0 0 0 #fff" }
		const nav_wrapper_margins = { marginLeft: 20, marginRight: 20 }
		const logo_img_styles = { height: 28, verticalAlign: "middle", marginTop: -7 }
		const logo_font = { fontSize: "1.3em", marginLeft: 10, fontWeight: 700, fontFamily: "Lato" }
		const link_colors = { color: "#424242" }
		return(

			<div className="navbar-fixed">
			  <nav className="white darken-4 grey-text text-darken-4" role="navigation" style={navbar_fixed_styles}>
			    <div className="nav-wrapper" style={nav_wrapper_margins}>
			      <a id="logo-container" href="#" className="" style={{top: -0.3}}>
			      	<img src="/images/logo.png" style={logo_img_styles } /><span className="grey-text lighten" style={logo_font}><b className="orange-text">immigration</b>portal</span></a>
			      <ul className="right hide-on-small-only">
			        <li><a href="/index-sb-about.php#pricing" className="grey-text text-darken-4">pricing</a></li>     
			        <li><a href="/blog/index.html" className="grey-text text-darken-4">blog</a></li>
			  		<li><a className="waves-effect grey-text text-darken-3 modal-trigger" href="#modal-contact-email">contact</a></li>   
			        <li><a href="/login.php" className="btn green white-text">Log In</a></li>
			  		<li><a href="/signup.php" className="btn orange white-text" style={{marginLeft: 10}}>Sign Up</a></li>                   	                                             
			      </ul>

			      <ul id="nav-mobile" className="side-nav">
			        <li><a href="/index-sb-about.php" className="grey-text text-darken-3">Features</a></li>     
			        <li><a href="/index-sb-about.php#pricing" className="grey-text text-darken-3">Pricing</a></li>
			        
			        <li><a href="/blog/index.html" className="grey-text text-darken-3">Blog</a></li>
			  
			  		<li><a className="waves-effect grey-text text-darken-3 modal-trigger" href="#modal-contact-email">Contact</a></li>        
			        <li><a href="/signup.php" className="green-text text-darken-3">Sign Up</a></li>   
			        <li><a href="/login.php" className="orange-text text-darken-3">Log In</a></li>

			      </ul>
			      <a href="#" data-activates="nav-mobile" className="button-collapse right hide-on-med-and-up"><i className="material-icons white-text">menu</i></a>
			    </div>
			  </nav>
			</div> 

		);
	}
}


export default Header;




