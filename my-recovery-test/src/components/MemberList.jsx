import React, { Component } from "react";
import Member from "./Member";
import "../styles/MemberList.scss";
import NewMemberForm from "./NewMemberForm";

class MemberList extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
      newMember: {
        firstName: "",
        lastName: "",
        role: "",
        specialities: "",
        onLeave: null,
        biography: ""
      }
    };
  }
  componentDidMount() {
    const { members } = this.props;
    this.setState({
      members: members
    });
  }

  handleNewMember = event => {
    event.preventDefault();
    console.log(event.target.value);
    const firstName = event.target.firstName;
    const lastName = event.target.lastName;
    const role = event.target.role;
    const specialities = event.target.specialities;
    const onLeave = event.target.onLeave;
    const biography = event.target.biography;
    const newMember = {
      firstName,
      lastName,
      role,
      specialities,
      onLeave,
      biography,
      id: Date.now()
    };
    this.setState({
      newMember
    });
  };

  addNewMember = event => {
    event.preventDefault();
    const members = [...this.state.members, this.state.newMember];
    console.log(members);
    this.setState({
      members,
      newMember: {
        firstName: "",
        lastName: "",
        role: "",
        specialities: "",
        onLeave: null,
        biography: ""
      }
    });
  };

  deleteMember(id) {
    const updatedMembers = this.state.members.filter(member => {
      return member.id !== id;
    });
    this.setState({
      members: updatedMembers
    });
  }

  render() {
    return (
      <div>
        <NewMemberForm
          handleNewMember={this.handleNewMember.bind(this)}
          addNewMember={this.addNewMember.bind(this)}
          newMember={this.state.newMember}
        />
        <div className="memberListContainer">
          {this.state.members.map(member => (
            <Member
              member={member}
              key={member.id}
              deleteMember={this.deleteMember.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MemberList;
