import { useState } from "react";
import "./AuthCard.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField/InputField";
import LoadingButton from "./LoadingButton/LoadingButton";
import { apiRequest } from "../../utils/apiRequest";

const AuthCard = ({
  title = "Authorization",
  buttonLabel = "Submit",
  apiEndpoint = "/api/auth/login",
  footerText = "",
  footerLinkLabel = "",
  onFooterLinkClick = () => {},
  onSuccess = () => {},
}) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    setLoading(true);

    try {
      const data = await apiRequest(apiEndpoint, formData);

     if (data.success) {
  toast.success(`${title} successful!`);

  // REGISTER: redirect to login
  if (apiEndpoint.includes("register")) {
    setTimeout(() => navigate("/"), 800);
  }

  // LOGIN: redirect to user page
  if (apiEndpoint.includes("login")) {
    setTimeout(() => navigate("/user"), 800);
  }

  onSuccess(data);
}
 else {
        toast.error(data.message || `${title} failed`);
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{title}</h2>

        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        <LoadingButton
          onClick={handleSubmit}
          loading={loading}
          label={buttonLabel}
        />

        {footerText && (
          <p className="auth-footer">
            {footerText}{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onFooterLinkClick();
              }}
            >
              {footerLinkLabel}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthCard;
