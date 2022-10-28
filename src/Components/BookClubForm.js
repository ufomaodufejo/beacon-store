import React from "react";

function BookClubForm() {
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
    <div className="mainbox main-box">
    <h1>Sign Up</h1>
    <div className="formbox">
      <form onSubmit={onSubmit}>
        <label className="form-label" htmlFor="fname">
         First Name
        </label>
        <input className="form-control" type="text" id="lname" required />

        <label className="form-label" htmlFor="name">
         Last Name
        </label>
        <input className="form-control" type="text" id="name" required />

        <label className="form-label" htmlFor="email">
          Email Address
        </label>
        <input className="form-control" type="email" id="email" required />

        <label className="form-label" htmlFor="message">
            Who is this registration for?
          </label>
          <textarea className="form-control" id="message" required />

        <button className="btn-one btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  </div>
  );
}

export default BookClubForm;
