import React from 'react';

function Contact(props) {
  return (
    <div className="contact-form" ref={props.contactRef}>
      <form action="">
        <div className="flex">
          <h4>Let's talk</h4>
        </div>
        <h6>New projects, freelance inquiry or even a coffee</h6>
        <fieldset>
          <div className="relative name form-control">
            <label for="name">Name *</label>
            <input type="text" name="name" />
            <small></small>
          </div>

          <div className="relative email form-control">
            <label for="email">email *</label>
            <input type="email" name="email" />
            <small></small>
          </div>

          <div className="relative textarea form-control">
            <label for="message">message</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              //   name={'message'}
            ></textarea>
            <small></small>
          </div>

          <button type="submit">
            <span>Send Message</span>
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;
