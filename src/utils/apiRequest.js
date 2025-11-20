const BASE_URL = process.env.REACT_APP_BACKEND_URL;

/* -------------------------
   POST Request (Login/Register)
-------------------------- */
export const apiRequest = async (endpoint, body) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return res.json();
};

/* -------------------------
   GET Request (Me / Logout)
-------------------------- */
export const apiGet = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    credentials: "include",
  });

  return res.json();
};

/* -------------------------
   Specific Auth APIs
-------------------------- */

// Get logged-in user
export const getLoggedInUser = () => apiGet("/api/auth/me");

// Logout user
export const logoutUser = () => apiGet("/api/auth/logout");
