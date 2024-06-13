import React from "react";
import user from "../images/user.png";
const ContactCard = (props) => {
    const{id, name, email} = props.contact
    return (
        <div className="item contact-item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">
                    {name}
                    <i className="trash alternate outline icon" style={{ color: "red" }}
                    onClick={() => props.clickHandler(id)}></i>
                </div>
                <div>{email}</div>
            </div>
        </div>
    )
}

export default ContactCard