import React, { useState } from "react";
import Modal from "react-modal";

//stores
import authStore from "../../stores/authStore";

//styles
import { customStyles, CreateButtonStyled } from "../../styles";

const SigninModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
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
      <h3>Sign in</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <label>Username</label>
            <input
              required
              type="text"
              className="form-control"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            required
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          Sign in
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default SigninModal;
