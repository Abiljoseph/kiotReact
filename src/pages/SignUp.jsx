import axios from "axios";
import React, { useState } from "react";

function SignUp(e) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: userName,
      email: email,
      password: password,
    };
    console.log(formData);

    try {
      const response = await axios.post("http://localhost:3001/auth/signUp",formData);
      if (response.status === 201) {
        console.log(response.data.message);
      } else {
        console.error("Failed to sign up");
      }
    } catch (error) {
      console.error("An error occurred while signing up:", error);
    }
    // console.log("Form submitted");
    // console.log(email, password, userName);
  };
  return (
    // <section class="bg-light p-3 p-md-4 p-xl-5">
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="" class="form-label">
          UserName
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
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

export default SignUp;
