import React from "react";
import "./AddCardForm.css";

const AddCardForm = (props) => {
  return (
    <form onSubmit={props.addContactCard}>
      <input
        type="text"
        name="contactEmail"
        placeholder="contactEmail"
        className="contact__form__email"
      />
      <input
        type="text"
        name="contactTelephone"
        placeholder="contactTelephone"
        className="contactTelephone"
      />
      <input
        type="text"
        name="contactImg"
        placeholder="contactImg-URL "
        className="contactImg"
        title="add URL image in string"
      />
      <input
        type="text"
        name="contactName"
        placeholder="contactName"
        className="contactName"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddCardForm;
