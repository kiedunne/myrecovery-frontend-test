import React, { Component } from "react";
import Member from "./Member";
import "../styles/MemberList.scss";

class MemberList extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }
  componentDidMount() {
    const { members } = this.props;
    console.log(members)
    this.setState({
      members: members
    });
  }

  deleteMember(id) {
    console.log(this.state.members)
    const updatedMembers = this.state.members.filter(member => {
      return member.id !== id;
    });
    this.setState({
      members: updatedMembers
    });
  }

  render() {
    return this.state.members.length !== 0 ? (
      <div className="memberListContainer">
        {this.state.members.map(member => (
          <Member
            member={member}
            key={member.id}
            deleteMember={this.deleteMember.bind(this)}
          />
        ))}
      </div>
    ) : (
      <h1 className="empty-alert">No members found :/</h1>
    );
  }
}

export default MemberList;
