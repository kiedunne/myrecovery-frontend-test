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
        profilePicture: "https://i.pinimg.com/originals/c4/0d/7a/c40d7a7060fb74926c257db982b6ddaf.jpg",
        type: "",
        specialities: [],
        onLeave: true,
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

  handleNewSpecs = event => {
    const specs = event.map(obj => {
      return obj.value;
    });
    const updatedList = {
      ...this.state.newMember,
      specialities: specs
    };
    this.setState({ newMember: updatedList });
  };

  handleNewLeave = event => {
    const updatedLeave = {
      ...this.state.newMember,
      onLeave: event.value
    };
    this.setState({ newMember: updatedLeave });
  };

  handleNewMember = event => {
    const updatedMemberList = {
      ...this.state.newMember,
      [event.target.name]: event.target.value,
      id: Date.now()
    };
    this.setState({
      newMember: updatedMemberList
    });
  };

  addNewMember = event => {
    event.preventDefault();
    const members = [this.state.newMember, ...this.state.members];
    this.setState({
      members,
      newMember: {
        firstName: "",
        lastName: "",
        profilePicture: "https://i.pinimg.com/originals/c4/0d/7a/c40d7a7060fb74926c257db982b6ddaf.jpg",
        type: "",
        specialities: [],
        onLeave: null,
        biography: ""
      }
    });
    document.getElementById("newMemberForm").reset();
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
          handleNewSpecs={this.handleNewSpecs.bind(this)}
          handleNewLeave={this.handleNewLeave.bind(this)}
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
