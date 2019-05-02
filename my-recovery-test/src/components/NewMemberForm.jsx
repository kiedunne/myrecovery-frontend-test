import React, { Component } from "react";
import "../styles/NewMember.scss";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";

class NewMemberForm extends Component {
  render() {
    const specOptions = [
      { value: "Orthopaedics", label: "Orthopaedics" },
      { value: "Renal", label: "Renal" },
      { value: "Paediatrics", label: "Paediatrics" }
    ];
    const leaveOptions = [
      { value: true, label: "Yes" },
      { value: false, label: "No" }
    ];

    return (
      <form
        id="newMemberForm"
        className="newMemberForm"
        onSubmit={this.props.addNewMember}
      >
        <div className="formInfoContainer">
          <div className="formInfoRow">
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
          </div>
          <input
            name="biography"
            onChange={this.props.handleNewMember}
            type="text"
            placeholder="Biography"
          />
        </div>
        <div className="selectContainers">
          <label>Select specialities</label>
          <Select
            name="specialities"
            onChange={this.props.handleNewSpecs}
            closeMenuOnSelect={false}
            components={makeAnimated()}
            isMulti
            options={specOptions}
          />
        </div>
        <div className="selectContainers">
          <label>On they currently on leave?</label>
          <Select
            name="onLeave"
            onChange={this.props.handleNewLeave}
            components={makeAnimated()}
            options={leaveOptions}
          />
        </div>
        <button type="submit" className="addMemberButton">
          + Add member
        </button>
      </form>
    );
  }
}

export default NewMemberForm;
