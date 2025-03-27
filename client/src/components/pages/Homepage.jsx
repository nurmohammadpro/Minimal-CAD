import { useNavigate } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Button from "../ui/Button";

const Homepage = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/signin");
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-96 hidden lg:flex items-center justify-center bg-gray-50">
        Left Side Content
      </div>
      <div className="flex flex-grow items-center justify-center gap-2">
        <div className="w-96 flex items-center justify-center gap-2">
          <Button
            title="Sign In"
            variant="dark"
            buttonWidth="full"
            onClick={handleSignInClick}
          />
          <Button
            title="Sign Up"
            variant="light"
            buttonWidth="full"
            onClick={handleSignUpClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
