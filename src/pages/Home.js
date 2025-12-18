import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import RequestForm from "../components/RequestForm";
import { Link } from "react-router-dom";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />
      <Hero />

      {user && (
        <div style={ctaWrapper}>
          <h2>Track Your Service Requests</h2>
          <p>View status updates of your submitted requests</p>
          <Link to="/my-requests" style={ctaBtn}>
            View My Requests
          </Link>
        </div>
      )}

      <Services />
      <RequestForm />
    </>
  );
}

const ctaWrapper = {
  background: "#1f2937",
  color: "white",
  padding: "50px",
  textAlign: "center",
};

const ctaBtn = {
  display: "inline-block",
  marginTop: 20,
  padding: "12px 24px",
  background: "#2563eb",
  color: "white",
  borderRadius: 8,
  textDecoration: "none",
};
