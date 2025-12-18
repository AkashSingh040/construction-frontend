import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav style={nav}>
      <b style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Construction Co.
      </b>

      {user ? (
        <div style={{ position: "relative" }}>
          <div onClick={() => setOpen(!open)} style={profileBtn}>
            {user.name || user.email}
          </div>

          {open && (
            <div style={dropdown}>
              <div style={item}><b>{user.name}</b></div>

              <div style={item}>
                <Link to="/my-requests">My Requests</Link>
              </div>

              {user.role === "admin" && (
                <div style={item}>
                  <Link to="/admin">Admin Panel</Link>
                </div>
              )}

              <div style={{ ...item, color: "red" }} onClick={logout}>
                Logout
              </div>
            </div>
          )}
        </div>
      ) : (
        <span style={{ fontSize: 14 }}>Login to continue</span>
      )}
    </nav>
  );
}

const nav = {
  padding: "15px 40px",
  background: "#111827",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const profileBtn = {
  cursor: "pointer",
  background: "#2563eb",
  padding: "8px 14px",
  borderRadius: 20,
  fontSize: 14,
};

const dropdown = {
  position: "absolute",
  right: 0,
  top: "120%",
  background: "#fff",
  color: "#111",
  borderRadius: 10,
  width: 180,
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  zIndex: 1000,
};

const item = {
  padding: "10px 14px",
  cursor: "pointer",
};
