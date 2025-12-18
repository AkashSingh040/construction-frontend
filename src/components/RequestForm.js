import { useState } from "react";
import api from "../api";
import LoginModal from "./LoginModal";

export default function RequestForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    serviceType: "",
    description: "",
  });

  const [showLogin, setShowLogin] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      setShowLogin(true);
      return;
    }

    try {
      await api.post("/requests", form);
      setSuccess(true);
      setForm({ name: "", phone: "", serviceType: "", description: "" });
    } catch {
      alert("Failed to submit request");
    }
  };

  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div style={wrapper}>
        <h2>Request a Service</h2>

        {success ? (
          <p style={{ color: "green", textAlign: "center" }}>
            ✅ Request submitted successfully!
          </p>
        ) : (
          <>
            <div style={{ display: "flex", gap: 15 }}>
              <input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <select
              value={form.serviceType}
              onChange={(e) =>
                setForm({ ...form, serviceType: e.target.value })
              }
            >
              <option value="">Select Service</option>
              <option>Residential Construction</option>
              <option>Commercial Projects</option>
              <option>Renovation</option>
            </select>

            <textarea
              placeholder="Describe your requirement"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <button style={{ width: "100%" }} onClick={handleSubmit}>
              Submit Request
            </button>
          </>
        )}
      </div>

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSuccess={() => {
            setShowLogin(false);
            handleSubmit();
          }}
        />
      )}
    </section>
  );
}

const wrapper = {
  background: "#fff",
  padding: 40,
  borderRadius: 20,
  width: "100%",
  maxWidth: 520,
  boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
};
