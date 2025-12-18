export default function Hero() {
  return (
    <section
      style={{
        height: "70vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: "600px", background: "rgba(0,0,0,0.6)", padding: 20 }}>
        <h1 style={{ fontSize: "42px" }}>Building Your Dream</h1>
        <p style={{ fontSize: "18px" }}>
          Reliable, modern & affordable construction services
        </p>
      </div>
    </section>
  );
}
