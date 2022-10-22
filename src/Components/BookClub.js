import React from 'react'
import { Link } from 'react-router-dom'

function BookClub() {
  return (
    <div className='bookclub'>
      <h1>WELCOME TO OUR BOOK CLUB!!!</h1>
      <p>An exciting one hour monthly virtual book chat series that is aimed at discussing and reviewing books of all genres such as:</p>
      <ul>
        <li>Autobiography and Biographies.</li>
        <li>Children</li>
        <li>Faith</li>
        <li>Fiction</li>
        <li>Non-fiction</li>
        <li>Self-help</li>
      </ul>
      <p>Meet the authors and our wonderful moderators hosting the book chats.</p>
      <div className='btn-div'>
         <Link to="book-club-registration-form">
             <button className='btn' >JOIN HERE</button>
         </Link>
      </div>
      
    </div>
  )
}

export default BookClub