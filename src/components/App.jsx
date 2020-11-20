import React, { Component } from "react";
import {contactsData} from "../contacts/contacts";
import AddCardForm from "./AddCardForm/AddCardForm";
import Avatar from "./Avatar";
import CardList from "./CardList";

class App extends Component{
state = {
  contacts: [...contactsData]
}

deleteCard = (id) => {
const filteredContects = this.state.contacts.filter((contact) => contact.id !== id)
  this.setState({
    contacts: [...filteredContects]
  })
}
addContactCard = (e) => {
e.preventDefault()
const id = Math.floor(Math.random()*10000)
const name = e.target.contactName.value
// console.log(name);
const email = e.target.contactEmail.value
const phone = e.target.contactTelephone.value
const imgURL = e.target.contactImg.value

const newCard = {
  id,
  name,
  imgURL,
  phone,
  email
}
this.setState({
  contacts: [ ...this.state.contacts,newCard]
})

e.target.reset();


}



  render(){
    return (

      <>  
      <div>
        <h1 className="heading">My Contacts</h1>
        <Avatar img="https://scontent.fktw5-1.fna.fbcdn.net/v/t1.0-1/p320x320/30724295_1773925975998905_6585874999108155137_n.jpg?_nc_cat=101&ccb=2&_nc_sid=dbb9e7&_nc_ohc=DM3o--srcdQAX-7tm9S&_nc_ht=scontent.fktw5-1.fna&tp=6&oh=0f34a2f6edcaaa01b68fc09c3dc7a2df&oe=5FCFBE9F" />
       <AddCardForm addContactCard = {this.addContactCard} />
        <CardList contacts={this.state.contacts} deleteCard={this.deleteCard}/>
      </div>
    
    </>
    );
  }

  
}

export default App;
