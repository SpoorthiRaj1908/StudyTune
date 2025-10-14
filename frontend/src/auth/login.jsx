import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  const inputStyle = { width: "100%", padding: 8, marginBottom: 12, borderRadius: 5, border: "1px solid #ccc" };
  const btnStyle = { width: "100%", padding: 8, borderRadius: 5, border: "none", backgroundColor: "#343a40", color: "white", fontWeight: "bold", cursor: "pointer" };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f8f9fa" }}>
      <div style={{ background: "#fff", padding: 24, borderRadius: 10, boxShadow: "0 0 15px rgba(0,0,0,0.2)", width: 300 }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
          <button type="submit" style={btnStyle}>Login</button>
        </form>
        <p style={{ textAlign: "center", marginTop: 12 }}>
          Don't have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
