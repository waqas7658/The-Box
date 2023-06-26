import React, { useState } from "react";
import "../Contactus/Contactus.css";

const Contactus = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [reason, setReason] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");

  const [formData, setFormData] = useState(
    "name",
    "email",
    "reason",
    "phone",
    "message"
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, reason, phone, message);
    console.log(formData);
    resetForm();
  };

  //  this function clear the form field
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      reason: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="Contactus">
          <div>
            <h4 className=" fw-bolder text-center py-5 Contact_h4">
              What can us do for you?
            </h4>
            <p className="contact_p">
              We are ready to work on a project of any complexity, whether it’s
              commercial or residential.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  class="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div class="col">
                <input
                  type="Email"
                  class="email"
                  placeholder="Email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  class="reason"
                  placeholder="Reason for contacting"
                  // value={reason}
                  // onChange={(e) => setReason(e.target.value)}
                  value={formData.reason}
                  onChange={handleChange}
                />
              </div>
              <div class="col">
                <input
                  type="tel"
                  class="phone"
                  placeholder="Phone No"
                  // value={phone}
                  // onChange={(e) => setPhone(e.target.value)}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <textarea
                type="text"
                className="message"
                placeholder="message"
                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button className="button my-5"> Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactus;
