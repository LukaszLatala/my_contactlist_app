import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

const Card = (props) => {
  const {name, img, tel, email, id, deleteCard} = props
  return (
    <li className="card" >
      <div className="top">
        {/* <p> {props.id}</p> */}
        <h2 className="name">{name}</h2>
        <Avatar img={img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={tel} />
        <Detail detailInfo={email} />
      </div>
      <button onClick={() => deleteCard(id)}>delete</button>
    </li>
  );
}

export default Card;
