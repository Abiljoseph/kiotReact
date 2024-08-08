import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/login",
        formData
      );
      console.log(response);
      if (response.status === 201) {
        console.log(response.data.message);
        navigate("/");
      } else {
        console.error("Failed to sign in");
      }
    } catch (error) {
      console.error("An error occurred while signing in:", error);
    }
    // console.log("Form submitted");
    // console.log(email, password, userName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default SignIn;
