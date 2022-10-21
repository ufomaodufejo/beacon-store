import React from "react";

function BookClubForm() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <inputField
          name="username"
          floatingLabelText="user name"
        />
        <inputField
          name="email"
          floatingLabelText="email"
        />
        <inputField
          name="password"
          floatingLabelText="password"
        />
      </form>
    </div>
  );
}

export default BookClubForm;
