import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard/AuthCard";

const Login = () => {
  const navigate = useNavigate();

  return (
    <AuthCard
      title="Authorization"
      buttonLabel="SIGN IN"
      apiEndpoint="/api/auth/login"
      footerText="Don't have an account?"
      footerLinkLabel="Sign Up"
      onFooterLinkClick={() => navigate("/register")}
    />
  );
};

export default Login;
