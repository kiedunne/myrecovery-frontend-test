import React, { Component } from "react";
import "../styles/Member.scss";

class Member extends Component {
  constructor() {
    super();
    this.state = {
      showMemberInfo: false,
      updatedMembers: []
    };
  }

  viewMemberInfo() {
    this.setState({
      showMemberInfo: !this.state.showMemberInfo
    });
  }

  render() {
    const { member } = this.props;
    const { specialities } = member;
    return (
      <div className="eachMemberContainer">
        <div className="memberTitleHeader">

          <img
            className="memberImage"
            src={ member.profilePicture}
            
            alt="member"
          />
          <div className="memberWords">
            <h1>
              {member.firstName} {member.lastName}
            </h1>
            <p>{member.type}</p>
          </div>
          <div className="buttonContainer">
            <button
              className="memberButtons"
              onClick={this.viewMemberInfo.bind(this)}
            >
              {this.state.showMemberInfo ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        <div
          style={
            this.state.showMemberInfo
              ? { display: "block" }
              : { display: "none" }
          }
          className="hiddenMemberInfo"
        >
          <p>{member.biography}</p>
          <h3>Leave:</h3>
          <p>{member.onLeave ? "Currently on leave" : "Not on leave"}</p>
          <h3>Specialities:</h3>
          <div className="memberSpecialities">
            {specialities
              ? specialities.map(spec => {
                  return <div className="eachSpeciality">{spec} </div>;
                })
              : specialities}
          </div>
          <button
            className="memberButtons"
            onClick={() => this.props.deleteMember(member.id)}
            type="submit"
          >
            Remove member
          </button>
        </div>
      </div>
    );
  }
}
export default Member;
