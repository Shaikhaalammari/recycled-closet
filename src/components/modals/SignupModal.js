import React, { useState } from "react";
import Modal from "react-modal";

//stores
import authStore from "../../stores/authStore";

//styles
import { customStyles, CreateButtonStyled } from "../../styles";

const SignupModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "vendor",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeModal();
  };
  // so when we even press enter it will submit
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Signup Modal"
    >
      <h3>New user</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <label>Username</label>
            <input
              required
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            required
            type="text"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            required
            type="text"
            className="form-control"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            required
            type="text"
            className="form-control"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            required
            type="text"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          Sign Up
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default SignupModal;
