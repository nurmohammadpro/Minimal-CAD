"use client";

import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import SpanText from "../ui/SpanText";
import { useState } from "react";
import api from "../../api/axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("email:", email);
    console.log("password:", password);
    console.log("confirmPassword:", confirmPassword);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await api.post("/users/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log("Full response:", response); // Corrected: Log response.data
      navigate("/signin");
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.response?.data?.error || "Signup failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center gap-2 mb-10 w-full">
        <h3 className="text-2xl font-semibold">Get Started absolutely free</h3>
        <div className="flex gap-2 text-gray-600 text-sm">
          <p>Already have an account?</p>
          <Link to="/signin">
            <SpanText text="Sign in here" />
          </Link>
        </div>
      </div>
      <div className="w-96 space-y-4">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <InputField
              type="text"
              label="First Name"
              variant="regular"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
              type="text"
              label="Last Name"
              variant="regular"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <InputField
            type="email"
            label="Email Address"
            variant="regular"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            label="Password"
            variant="regular"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            type="password"
            label="Confirm Password"
            variant="regular"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button
            title="Sign Up"
            variant="dark"
            buttonWidth="full"
            type="submit"
          />
        </form>
        <div className="mb-4">
          <div className="text-xs text-gray-500 flex gap-2">
            <p>By signing up, I agree to</p>
            <Link to="/termsofservice">
              <SpanText text="Terms of service" />
            </Link>
            <p>and</p>
            <Link to="/privacypolicy">
              <SpanText text="Privacy policy" />
            </Link>
            <p>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
