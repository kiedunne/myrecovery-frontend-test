import React, { Component } from "react";
import "../styles/NewMember.scss";

class NewMemberForm extends Component {

  render() {
    return (
      <form className="newMemberForm" onSubmit={this.props.addNewMember}>
        <input
          name="firstName"
          onChange={this.props.handleNewMember}
          value={this.props.newMember.firstName}
          type="text"
          placeholder="First Name"
        />
        <input
          name="lastName"
          onChange={this.props.handleNewMember}
          value={this.props.newMember.lastName}
          type="text"
          placeholder="Last Name"
        />
        <input
          name="role"
          onChange={this.props.handleNewMember}
          value={this.props.newMember.role}
          type="text"
          placeholder="Role"
        />
        <input
          name="specialities"
          onChange={this.props.handleNewMember}
          value={this.props.newMember.specialities}
          type="text"
          placeholder="Specialities"
        />
        <label>On they currently on leave?</label>
        <select
          name="onLeave"
          onChange={this.props.handleNewMember}
          value={this.props.newMember.onLeave}
        >
          <option>Yes</option>
          <option>No</option>
        </select>
        <input
          name="biography"
          onChange={this.props.handleNewMember}
          value={this.props.newMember.biography}
          type="text"
          placeholder="Biography"
        />
        <button className="addMemberButton">+ Add member</button>
      </form>
    );
  }
}

export default NewMemberForm;
