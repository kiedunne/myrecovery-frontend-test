import React, { Component } from "react";
import Member from "./Member";
import "../styles/MemberList.scss";

class MemberList extends Component {
  constructor() {
    super();
    this.state = {
      members: [], 
      newMember: {
          firstName: '',
          lastName: '',
          role: '',
          specialities: '',
          onLeave: null,
          biography: ''
      }
    };
  }
  componentDidMount() {
    const { members } = this.props;
    console.log(members);
    this.setState({
      members: members
    });
  }

  handleNewMember(event) {
      event.preventDefault()
//     const itemText = event.target.value
//     const currentItem = { text: itemText, key:
//        Date.now() }
//        this.setState({
//          currentItem,
//     })
//   }
  }

  deleteMember(id) {
    console.log(this.state.members);
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
            handleNewMember={this.handleNewMember.bind(this)}
            addMember={this.addMember.bind(this)}
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
