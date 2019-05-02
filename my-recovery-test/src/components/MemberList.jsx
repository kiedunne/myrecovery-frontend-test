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
    console.log(this.state.newMember);
  };

  handleNewLeave = event => {
    const updatedLeave = {
      ...this.state.newMember,
      onLeave: event.target.value === "Yes" ? true : false
    };
    console.log(updatedLeave);
    this.setState({ newMember: updatedLeave });
    console.log(this.state.newMember);
  };

  handleNewMember = event => {
    const updatedMemberList = {
      ...this.state.newMember,
      [event.target.name]: event.target.value
    };
    this.setState({
      newMember: updatedMemberList
    });
    console.log(this.state.newMember);
  };

  addNewMember = event => {
    event.preventDefault();
    const members = [...this.state.members, this.state.newMember];
    this.setState({
      members,
      newMember: {
        firstName: "",
        lastName: "",
        type: "",
        specialities: [],
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
