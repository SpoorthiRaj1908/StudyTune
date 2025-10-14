import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters and include one capital letter, one number, and one symbol.");
      return;
    }


    if (password !== retypePassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); 
    console.log("Name:", name, "Email:", email, "Password:", password);
  
  };

  const inputStyle = { width: "100%", padding: 8, marginBottom: 12, borderRadius: 5, border: "1px solid #ccc" };
  const btnStyle = { width: "100%", padding: 8, borderRadius: 5, border: "none", backgroundColor: "#343a40", color: "white", fontWeight: "bold", cursor: "pointer" };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f8f9fa" }}>
      <div style={{ background: "#fff", padding: 24, borderRadius: 10, boxShadow: "0 0 15px rgba(0,0,0,0.2)", width: 300 }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
          <input type="password" placeholder="Retype Password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} required style={inputStyle} />

          {error && <p style={{ color: "red", marginBottom: 12 }}>{error}</p>}

          <button type="submit" style={btnStyle}>Sign Up</button>
        </form>
        <p style={{ textAlign: "center", marginTop: 12 }}>
          Already have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
