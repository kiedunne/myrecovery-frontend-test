import React, { Component } from "react";
import "../styles/NewMember.scss";

class NewMember extends Component {

render(){
    return (
      <div>
          <form style={{display: 'none'}} className="newMemberForm">
            <input
              placeholder="First Name"
            />
            <input
              placeholder="Last Name"
            />
            <input
              placeholder="Role"
            />
            <select
              placeholder="Specialities"
            />
            <label>On they currently on leave?</label>
            <select>
              <option>Yes</option>
              <option>No</option>
            </select>
            <input
              placeholder="Biography"
            />
            <button type="submit">Add member</button>
          </form>
        </div>
    )
  }
}

export default NewMember