import React from "react";
import Member from "./Member";
import "../styles/MemberList.scss";

const MemberList = ({ members }) => {
  return members.length !== 0 ? (
    <div className="memberListContainer">
      {members.map(member => (
        <Member member={member} key={member.id} />
      ))}
    </div>
  ) : (
    <h1 className="empty-alert">No members found :/</h1>
  );
};

export default MemberList;
