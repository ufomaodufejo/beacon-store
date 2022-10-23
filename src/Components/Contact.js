import React from 'react'
import ErrorBoundary from './ErrorBoundary'

function ContactMini(){
  //throw new Error("This is a test error") 
  return (
    <div>
      Contact Mini
    </div>
  )
}

function Contact() {
  return (
    <>
    <ErrorBoundary>
      <ContactMini />
    </ErrorBoundary>
      <div>Contact</div>
    </>

  )
}

export default Contact
