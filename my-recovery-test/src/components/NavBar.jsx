import React, { Component } from "react";
import "../styles/NavBar.scss";
import NewMember from "./NewMember";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      viewForm: false
    };
  }

  showForm() {
    this.setState({
      viewForm: !this.state.viewForm
    });
  }
  render() {
    console.log(this.state.viewForm);
    return (
      <div className="navBarContainer">{this.state.viewForm && <NewMember />}
        <button className="addMemberButton" onClick={this.showForm.bind(this)}>
          + Add member
        </button>

      </div>
    );
  }
}

export default NavBar;
