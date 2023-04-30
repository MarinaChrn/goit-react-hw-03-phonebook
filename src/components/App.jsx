import { Component } from "react";
import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { FilterContacts } from "./filter/FilterContacts";
import { Layout } from "./GlobalStyles.styled";


export class App extends Component  {
  state = {
    contacts: [],
    filter:'',
  }

  componentDidMount() {
    const contactsArray = JSON.parse(localStorage.getItem('contacts'));
    if (!contactsArray) return;
    this.setState({ contacts: contactsArray });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }



  addContact = (contact) =>{
    let arraysOfName=[];
    this.state.contacts.map(element=> (
      arraysOfName.push(element.name) 
      ));
    if (!arraysOfName.includes(contact.name)) {
      this.setState((prevState)=>({contacts: [...prevState.contacts, contact]}))
    } else {
      alert(`${contact.name} is alredy in contacts`)
    }
  }

  deleteContact=(id) =>{
    this.setState(prevState=>({contacts: prevState.contacts.filter(contact=> contact.id!==id)}))
  }

  searchByName =(name)=> {
    this.setState(({filter: name.toLowerCase()}))
  }

  getVisibleContacts () {
    console.log(this.state.contacts)
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    )};

  render () {
    console.log(this.state.contacts)
    return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm addContact={this.addContact}/>
      <h2>Contacts</h2>
      <FilterContacts searchByName={this.searchByName}/>
      <ContactList contacts={this.getVisibleContacts()} deleteContact={this.deleteContact}/> 
    </Layout>
  );
}
};
