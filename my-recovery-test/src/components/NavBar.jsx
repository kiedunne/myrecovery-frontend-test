import React, { Component } from "react";
import "../styles/NavBar.scss";
import NewMember from "./NewMember";

class NavBar extends Component {



render() {
    return(
        <div className="navBarContainer">
        <button className='addMemberButton'>+ Add member</button>
            <NewMember />
        </div>
    )
}

}


export default NavBar