import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />

      <Routes>
        {/* Default route → Login */}
        <Route path="/" element={<Login />} />

        {/* Register route */}
        <Route path="/register" element={<Register />} />

        <Route path="/user" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
