import React, {PropTypes as T, Component} from "react";
import Home from "./Home"

class Container extends Component {
  static contextTypes = {
    router: T.object
  }

  render() {
    return (
      <div>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    );
	}
}


export default Container;


