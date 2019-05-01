import React from "react";
import "../styles/Member.scss";

const Member = ({ member }) => {
  return (
    <div className="eachMemberContainer">
      <div className="memberTitle">
        <img className="memberImage" src={member.profilePicture} alt="member" />
        <h1>
          {member.firstName} {member.lastName}
        </h1>
        <p>{member.type}</p>
      </div>
      <p>{member.biography}</p>
      <p>{member.onLeave ? 'Currently on leave' : 'Not on leave'}</p>
      <p>{member.specialities}</p>
    </div>
  );
};

export default Member;
