import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="top">
        <h1>CONTACT</h1>
        <p>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <div className="bottom">
        <form className="form">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
