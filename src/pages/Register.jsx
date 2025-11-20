import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard/AuthCard";

const Register = () => {
  const navigate = useNavigate();

  return (
    <AuthCard
      title="Register"
      buttonLabel="SIGN UP"
      apiEndpoint="/api/auth/register"
      footerText="Already have an account?"
      footerLinkLabel="Sign In"
      onFooterLinkClick={() => navigate("/")}
    />
  );
};

export default Register;
