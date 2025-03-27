"use client";

import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import SpanText from "../ui/SpanText";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // 1. Sign in request
      const response = await axios.post(
        "http://localhost:5000/api/users/signin",
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Store user data in localStorage if available
      if (response.data && response.data.user) {
        localStorage.setItem("userData", JSON.stringify(response.data.user));
      }

      // 2. Verify auth status
      const authCheck = await axios.get(
        "http://localhost:5000/api/users/check-auth",
        { withCredentials: true }
      );

      // 3. Only redirect if verified
      if (authCheck.data.isAuthenticated) {
        navigate("/dashboard");
      } else {
        setError("Authentication verification failed");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Sign-in failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center gap-2 mb-8">
        <h3 className="text-2xl font-semibold">Sign in to your account</h3>
        <div className="flex gap-2 text-gray-600 text-sm">
          <p>Don't have an account?</p>
          <Link to="/signup">
            <SpanText text="Get Started" />
          </Link>
        </div>
      </div>
      <div className="w-96 space-y-4">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <InputField
            type="email"
            label="Email"
            variant="regular"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <InputField
            type="password"
            label="Password"
            variant="regular"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button
            title={isLoading ? "Signing in..." : "Sign In"}
            variant="dark"
            buttonWidth="full"
            type="submit"
            disabled={isLoading}
            isLoading={isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
