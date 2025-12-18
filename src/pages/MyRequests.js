import { useEffect, useState } from "react";
import api from "../api";

export default function MyRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchMyRequests();
  }, []);

  const fetchMyRequests = async () => {
    try {
      const res = await api.get("/requests/my");
      setRequests(res.data);
    } catch {
      alert("Please login to view your requests");
    }
  };

  return (
    <div style={page}>
      <h1>My Service Requests</h1>

      {requests.length === 0 ? (
        <p>You have not submitted any requests yet.</p>
      ) : (
        requests.map((r) => (
          <div key={r._id} style={card}>
            <h3>{r.serviceType}</h3>
            <p><b>Status:</b> <span style={status(r.status)}>{r.status}</span></p>
            <p>{r.description}</p>
            <small>Submitted on: {new Date(r.createdAt).toLocaleDateString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

const page = {
  padding: 40,
  background: "#f4f6f8",
  minHeight: "100vh",
};

const card = {
  background: "#fff",
  padding: 20,
  borderRadius: 14,
  marginBottom: 20,
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
};

const status = (s) => ({
  color:
    s === "new" ? "#2563eb" :
    s === "probable" ? "#f59e0b" :
    s === "contacted" ? "#0ea5e9" :
    s === "closed" ? "#16a34a" :
    "#dc2626",
});
