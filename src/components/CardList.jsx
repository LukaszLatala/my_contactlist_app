import React from 'react'
import Card from './Card'

const CardList = ({contacts, deleteCard}) => {

    return (
        <ul style={{listStyle: 'none'}}>
            {contacts.map((contact)=> {
                const {id, name,imgURL, phone, email} = contact
               return (
                <Card
                key={id}
                id={id}
                name={name}
                img={imgURL}
                tel={phone}
                email={email}
                deleteCard={deleteCard}
                // {...contact}
              />
               ) 
               
            })}
        </ul>
    )

}


export default CardList