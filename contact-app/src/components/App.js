import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return retrievedContacts || [];
  });

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id: uuid(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactsList = contacts.filter((contact) =>{
      return contact.id!==id
    })
    setContacts(newContactsList)
  }
  // useEffect(()=>{
  //   const retrivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if(retrivedContacts) setContacts(retrivedContacts)
  // }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
