import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => {
      return {
        ...currentData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
  }

  return (
    <div className="page contact-page">
      <section className="contact-hero">
        <div className="container contact-hero-grid">
          <div>
            <span className="eyebrow">Private Enquiry</span>

            <h1>Begin privately.</h1>
          </div>

          <p>
            Share what you are looking for and our team will respond with a
            considered selection.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-image">
            <img
              src="/valehouse-estates/img/contact-residence-entry.png"
              alt="Private residence entrance with warm lighting"
            />
          </div>

          <div className="contact-panel">
            <div className="contact-panel-heading">
              <span className="eyebrow">Tell Us Quietly</span>

              <h2>A considered search starts with a few details.</h2>

              <p>
                Let us know the type of residence, location, and lifestyle you
                are drawn to. We will respond with a more refined direction.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+60"
                />
              </div>

              <div className="form-row">
                <label htmlFor="interest">Property Interest</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Villa">Villa</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div className="form-row form-row-full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you are looking for."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Enquiry
              </button>

              {isSubmitted && (
                <p className="form-success">
                  Thank you. Your enquiry has been received and our team will
                  respond with a considered selection.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="contact-details-section">
        <div className="container contact-details-grid">
          <article>
            <span>Email</span>
            <a href="mailto:hello@valehouseestates.com">
              hello@valehouseestates.com
            </a>
          </article>

          <article>
            <span>Phone</span>
            <a href="tel:+60300000000">+603 0000 0000</a>
          </article>

          <article>
            <span>Location</span>
            <p>Kuala Lumpur, Malaysia</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Contact;