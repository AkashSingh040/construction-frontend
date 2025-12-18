import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import api from "../api";

export default function LoginModal({ onClose, onSuccess }) {
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseToken = await result.user.getIdToken();

      // Send token to backend
      const res = await api.post("/auth/verify", {}, {
        headers: {
          Authorization: `Bearer ${firebaseToken}`,
        },
      });

      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      onSuccess();
    } catch (err) {
        console.error("LOGIN ERROR FULL:", err);
        console.error("RESPONSE:", err?.response?.data);
        alert("Login failed — check console");
        }   
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>Login Required</h2>
        <p>Please login to submit your request.</p>

        <button onClick={loginWithGoogle} style={{ width: "100%" }}>
          Continue with Google
        </button>

        <button onClick={onClose} style={closeBtn}>
          Cancel
        </button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2000,
};

const modal = {
  background: "#fff",
  padding: 30,
  borderRadius: 16,
  width: 360,
  textAlign: "center",
};

const closeBtn = {
  marginTop: 15,
  background: "transparent",
  color: "#555",
};
