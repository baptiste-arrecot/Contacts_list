import { useState } from 'react';
import { favoritesContext } from '../App';
import { useContext } from 'react'

const ContactsList = (props) => {
    const [favorites, setFavorites] = useState();

    if (!props.query) {
        return <div>Cannot find contacts</div>
    } else {
        const contacts = props.query[0];
        return (
            contacts.map((contact) => {
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