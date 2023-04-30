import { Formik } from "formik"
import { Form, StyledLabel, Field, StyledButton } from "./ContactForm.styled"
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

export const ContactForm = ({addContact}) => {
    return (
       <Formik 
        initialValues={{
            name:'',
            number:'',
        }}
        onSubmit={(contact, actions)=> {
            contact.id = nanoid();
            addContact(contact);
            actions.resetForm();
        }}
       >
        <Form>
            <StyledLabel>
                Name
                <Field name="name"
                pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                placeholder="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required/>
            </StyledLabel>
            <StyledLabel>
                Number
                <Field type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                placeholder="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required/>
            </StyledLabel>
            <StyledButton type="submit">Submit</StyledButton>
        </Form>

       </Formik>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}