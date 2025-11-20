import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./UserDetails.css";
import { getLoggedInUser, logoutUser } from "../../utils/apiRequest";

const UserDetails = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "" });

  const loadUser = useCallback(async () => {
    try {
      const data = await getLoggedInUser();

      if (!data.success) {
        navigate("/");
        return;
      }

      setUser({ email: data.user.email });
    } catch (err) {
      console.error("User fetch failed:", err);
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const data = await logoutUser();

      if (data.success) {
        toast.success("Logged out successfully");
      }

      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <div className="details-page">
      <header className="details-header">
        <span className="details-email">{user.email}</span>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="details-body"></div>
    </div>
  );
};

export default UserDetails;
