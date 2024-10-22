import { useState } from "react";
import "./contact.scss";
import axios from "../../utils/axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    try {
      setLoading(true);
      await axios.post("/save", formData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
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
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            value={formData.message}
          ></textarea>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
