import { useState } from "react";
import Modal from "./Modal";

const services = [
  {
    title: "Residential Construction",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    description:
      "High-quality residential homes built with modern design and durable materials.",
    projects: ["Villas", "Independent Houses", "Apartments"],
  },
  {
    title: "Commercial Projects",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    description:
      "Complete commercial construction solutions for offices and business spaces.",
    projects: ["Office Buildings", "Shopping Complexes", "IT Parks"],
  },
  {
    title: "Renovation & Remodeling",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description:
      "Transform existing spaces with modern renovation and remodeling services.",
    projects: ["Kitchen", "Bathroom", "Structural Renovation"],
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section>
      <h2>Our Services</h2>

      <div style={grid}>
        {services.map((s, i) => (
          <div key={i} style={card} onClick={() => setActive(s)}>
            <img src={s.img} alt={s.title} style={img} />
            <div style={content}>
              <h3>{s.title}</h3>
              <p style={{ color: "#555" }}>Click to view projects →</p>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <Modal onClose={() => setActive(null)}>
          <h2>{active.title}</h2>
          <p>{active.description}</p>

          <h3 style={{ marginTop: 20 }}>Sample Projects</h3>
          <ul>
            {active.projects.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </Modal>
      )}
    </section>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 30,
};

const card = {
  background: "#fff",
  borderRadius: 16,
  overflow: "hidden",
  cursor: "pointer",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  transition: "transform 0.2s ease",
};

const img = {
  width: "100%",
  height: 220,
  objectFit: "cover",
};

const content = {
  padding: 20,
};
