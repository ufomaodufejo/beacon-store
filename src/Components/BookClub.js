import React from "react";
import { Link, Outlet,} from "react-router-dom";

function BookClub() {
  return (
    <div className="bookclub">
      <h1>WELCOME TO OUR BOOK CLUB!!!</h1>
      <p>
        An exciting one hour monthly virtual book chat series that is aimed at
        discussing and reviewing books of all genres such as:
      </p>
      <ul>
        <li>Autobiography and Biographies.</li>
        <li>Children</li>
        <li>Faith</li>
        <li>Fiction</li>
        <li>Non-fiction</li>
        <li>Self-help</li>
      </ul>
      <p>
        Meet the authors and our wonderful moderators hosting the book chats.
      </p>
      <div className="btn-div">
        <Link to="book-club-form">
             <button className='btn-one' >JOIN HERE</button>
        </Link>
      </div>
      <div>
      <Outlet />
      </div>
    </div>
  );
}

export default BookClub;
