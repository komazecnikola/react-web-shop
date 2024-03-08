import React, { useState } from "react";
import "./cartForm.css";

const CartForm = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPerson((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <div className="cartForm">
      <form onSubmit={handleSubmit}>
        <div className="inputWrapper col">
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="inputWrapper col">
          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            value={person.lastName}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="inputWrapper col">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={person.country}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="inputWrapper col">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={person.state}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="inputWrapper col">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={person.address}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="inputWrapper col">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={person.city}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="inputWrapper col">
          <label>Postal code:</label>
          <input
            type="text"
            name="postalCode"
            value={person.postalCode}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="checkoutBtn">
          <input className="btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default CartForm;
