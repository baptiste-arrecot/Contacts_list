import { useState, useContext } from 'react';

const ContactsList = (props) => {
    useContext();
    if (!props.query) {
        return <div>Cannot find contacts</div>
    } else {
        return (
            props.query.map((contact) => {
                (
                    <div>
                        <li key={contact.id}>
                            <img src={contact.avatar} alt="Profile pic"></img>
                            Contact name: {contact.first_name} {contact.last_name} email: {contact.email}
                            <button onClick={() =>  { setFavorites([...favorites, contact])}}>Add to favorite</button>
                        </li>
                    </div>
                )
            }));
    }
}

export default ContactsList;