import React, { Component } from "react";
import "../styles/NewMember.scss";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";

class NewMemberForm extends Component {
  render() {
    const options = [
      { value: "Orthopaedics", label: "Orthopaedics" },
      { value: "Renal", label: "Renal" },
      { value: "Paediatrics", label: "Paediatrics" }
    ];

    return (
      <form className="newMemberForm" onSubmit={this.props.addNewMember}>
        <input
          name="firstName"
          onChange={this.props.handleNewMember}
          type="text"
          placeholder="First Name"
        />
        <input
          name="lastName"
          onChange={this.props.handleNewMember}
          type="text"
          placeholder="Last Name"
        />
        <input
          name="type"
          onChange={this.props.handleNewMember}
          type="text"
          placeholder="Role"
        />
        <label>Select specialities</label>
        <Select
          name="specialities" 
          onChange={this.props.handleNewSpecs}
          closeMenuOnSelect={false}
          components={makeAnimated()}
          isMulti
          options={options}
        />
        <label>On they currently on leave?</label>
        <select name="onLeave" onChange={this.props.handleNewMember}>
          <option>Yes</option>
          <option>No</option>
        </select>
        <input
          name="biography"
          onChange={this.props.handleNewMember}
          type="text"
          placeholder="Biography"
        />
        <button type="submit" className="addMemberButton">
          + Add member
        </button>
      </form>
    );
  }
}

export default NewMemberForm;
