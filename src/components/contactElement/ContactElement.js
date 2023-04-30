import { StyledButton, StyledElement } from "./ContactElement.styled";
import PropTypes from 'prop-types';

export const ContactElement = ({contact, deleteContact})=> {
    return (
        <StyledElement id={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <StyledButton type="button" onClick={(event)=>{deleteContact(contact.id)}}>Delete</StyledButton>
        </StyledElement>
    )
}

ContactElement.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired,
}