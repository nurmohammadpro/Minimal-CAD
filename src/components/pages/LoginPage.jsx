import { useState } from "react";
import { Link } from "lucide-react";
import Button from "../Button";
import Input from "../Input";
import { EyeIcon, EyeOffIcon, HelpCircleIcon } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="w-full p-6 flex justify-between items-center">
        <div className="w-8 h-8">
          <svg
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M19.5 10.5C24 18 28.5 18 28.5 18C28.5 18 24 25.5 19.5 25.5C15 25.5 7.5 18 7.5 18C7.5 18 15 3 19.5 10.5Z"
              fill="#4CAF50"
            />
          </svg>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500 flex items-center gap-2"
        >
          <HelpCircleIcon className="w-4 h-4" />
          Need help?
        </Button>
      </header>

      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 py-12 md:px-12 max-w-6xl mx-auto w-full gap-12">
        {/* Left side - Welcome */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="space-y-2 max-w-md">
            <h1 className="text-3xl font-bold text-gray-900">
              Hi, Welcome back
            </h1>
            <p className="text-gray-600">
              More effectively with optimized workflows.
            </p>
          </div>

          <div className="relative h-64 w-full max-w-md">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Dashboard illustration"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 max-w-md">
          <form onSubmit={handleSubmit}>
            {/* Wrap in form element */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Sign in to your account
                </h2>
                <p className="text-gray-600 text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/signup" // Use 'to' instead of 'href' for react-router-dom
                    className="text-green-600 font-medium hover:underline"
                  >
                    Get started
                  </Link>
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-600">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email} // Use value instead of defaultValue
                    onChange={handleEmailChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="text-sm text-gray-600">
                      Password
                    </label>
                    <Link
                      to="/forgot-password" // Use 'to' instead of 'href'
                      className="text-sm text-gray-600 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="6+ characters"
                      value={password} // Use value instead of placeholder
                      onChange={handlePasswordChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? (
                        <EyeOffIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit" // Add type="submit"
                  className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg"
                >
                  Sign in
                </Button>

                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative px-4 bg-white text-sm text-gray-500">
                    OR
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  {/* ... social login buttons */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
