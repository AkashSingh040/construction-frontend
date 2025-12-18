import { useEffect, useState } from "react";
import api from "../api";

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const res = await api.get("/admin/requests");
    setRequests(res.data);
  };

  const updateStatus = async (id, status) => {
    await api.patch(`/admin/requests/${id}`, { status });
    fetchRequests();
  };

  const deleteRequest = async (id) => {
    if (!window.confirm("Delete this request?")) return;
    await api.delete(`/admin/requests/${id}`);
    fetchRequests();
  };

  return (
    <div style={page}>
      <h1>Admin Dashboard</h1>

      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        requests.map((r) => (
          <div key={r._id} style={card}>
            <div style={row}>
              <strong>{r.name}</strong>
              <span>Status: <b>{r.status}</b></span>
            </div>

            <p><b>Phone:</b> {r.phone}</p>
            <p><b>Service:</b> {r.serviceType}</p>
            <p><b>Description:</b> {r.description}</p>

            <div style={actions}>
              <select
                value={r.status}
                onChange={(e) => updateStatus(r._id, e.target.value)}
              >
                <option value="new">New</option>
                <option value="probable">Probable</option>
                <option value="contacted">Contacted</option>
                <option value="closed">Closed</option>
                <option value="rejected">Rejected</option>
              </select>

              <button
                onClick={() => deleteRequest(r._id)}
                style={{ background: "#dc2626" }}
              >
                Delete
              </button>
            </div>
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

const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 10,
};

const actions = {
  display: "flex",
  gap: 10,
  marginTop: 10,
};
