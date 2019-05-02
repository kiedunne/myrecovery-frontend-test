import React, { Component } from "react";
import "../styles/NewMember.scss";

class NewMember extends Component {
  render() {
    return (
      <form
        onSubmit={this.props.addMember.bind(this)}
        onChange={this.props.handleNewMember.bind(this)}
        className="newMemberForm"
      >
        <input id="firstName" name="firstName" type="text" placeholder="First Name" />
        <input id="lastName" name="lastName" type="text" placeholder="Last Name" />
        <input id="role" name="role" type="text" placeholder="Role" />
        <input id="specialities" name="specialities" type="text" placeholder="Specialities" />
        <label>On they currently on leave?</label>
        <select id="onleave" name="onleave">
          <option>Yes</option>
          <option>No</option>
        </select>
        <input id="biography" name="biography" type="text" placeholder="Biography" />
        <button type="submit">Add member</button>
      </form>
    );
  }
}

export default NewMember;

