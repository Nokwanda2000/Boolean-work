import React from 'react';
import { useForm } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('signupForm');

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} id="fs-frm" name="simple-contact-form">
        <fieldset id="fs-frm-inputs" className="form-fieldset">
          <label htmlFor="full-name" className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required=""
            className="form-input"
          />
          <label htmlFor="email-address" className="form-label">Email Address</label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.tld"
            required=""
            className="form-input"
          />
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
            required=""
            className="form-textarea"
          />
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
        </fieldset>
        <input type="submit" disabled={state.submitting} value="Submit" className="form-submit" />
        {state.errors && (
          <div className="error-message">
            {state.errors.map((error, index) => (
              <p key={index}>{error.message}</p>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}