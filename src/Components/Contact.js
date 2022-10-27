import React from "react";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="mainbox">
      <h1>Contact Us</h1>
      <div className="formbox">
        <form onSubmit={onSubmit}>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />

          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />

          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />

          <button className="btn-one btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
