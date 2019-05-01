import React, { Component } from "react";
import "../styles/NewMember.scss";

class NewMember extends Component {

render(){
    return (

          <form className="newMemberForm">
            <input
              placeholder="First Name"
            />
            <input
              placeholder="Last Name"
            />
            <input
              placeholder="Role"
            />
            <input
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

    )
  }
}

export default NewMember