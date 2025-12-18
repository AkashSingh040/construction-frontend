import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={footer}>
      <div style={container}>
        {/* Company Info */}
        <div>
          <h3>Construction Company</h3>
          <p>Reliable construction & service solutions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul style={list}>
            <li>
              <Link to="/" style={link}>Home</Link>
            </li>
            <li>
              <Link to="/#services" style={link}>Services</Link>
            </li>
            <li>
              <Link to="/my-requests" style={link}>My Requests</Link>
            </li>
            <li>
              <Link to="/#contact" style={link}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4>Contact</h4>
          <p>Email: support@construction.com</p>
          <p>Phone: +91 9XXXXXXXXX</p>
        </div>
      </div>

      <div style={bottom}>
        © {new Date().getFullYear()} Construction Company. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------- STYLES ---------- */

const footer = {
  background: "#111827",
  color: "#e5e7eb",
  paddingTop: "40px",
  marginTop: "80px",
};

const container = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0 60px",
  flexWrap: "wrap",
};

const list = {
  listStyle: "none",
  padding: 0,
  lineHeight: "1.9",
};

const link = {
  color: "#e5e7eb",
  textDecoration: "none",
};

const bottom = {
  textAlign: "center",
  marginTop: "30px",
  padding: "15px",
  borderTop: "1px solid #374151",
  fontSize: "14px",
};
