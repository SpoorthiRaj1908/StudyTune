import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // for cookies/sessions
        body: JSON.stringify({ email, password }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        data = { message: "Invalid JSON response from server" };
      }

      if (res.ok) {
        setError("");
        setSuccess(data.message || "✅ Logged in successfully!");

        // Store flash message in sessionStorage
        sessionStorage.setItem("flashMessage", "User logged in successfully");

        // Redirect after 1.5s
        setTimeout(() => {
          setSuccess("");
          window.location.href = "http://localhost:5173/"; // full URL redirect
        }, 1500);
      } else {
        setError(data.message || "Invalid credentials!");
        setSuccess("");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error! Please try again later.");
      setSuccess("");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.left}>
        <div style={styles.illustrationContainer}>
          <svg
            width="200"
            height="200"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="256" cy="256" r="256" fill="#F3F4F6" />
            <path
              d="M256 128C195.2 128 144 179.2 144 240C144 300.8 195.2 352 256 352C316.8 352 368 300.8 368 240C368 179.2 316.8 128 256 128Z"
              fill="#E3B7D3"
            />
          </svg>
          <h1 style={{ color: "white", marginTop: 20 }}>Welcome Back</h1>
          <p style={{ color: "white", fontSize: 16 }}>
            Log in to continue your learning journey!
          </p>
        </div>
      </div>

      <div style={styles.right}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: 24, color: "#333" }}>Login</h2>

          {error && <p style={{ color: "red", marginBottom: 16 }}>{error}</p>}
          {success && (
            <p style={{ color: "green", marginBottom: 16 }}>{success}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={styles.togglePassword}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </span>

          <button type="submit" style={styles.button}>
            Login
          </button>

          <p style={{ marginTop: 16, fontSize: 14 }}>
            Don’t have an account?{" "}
            <span
              style={{ color: "#E3B7D3", cursor: "pointer" }}
              onClick={() => (window.location.href = "/signup")}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    fontFamily: "Poppins, sans-serif",
  },
  left: {
    flex: 1,
    background: "linear-gradient(135deg, #E3B7D3, #DDB5AC)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  illustrationContainer: {
    textAlign: "center",
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
  },
  form: {
    width: "80%",
    maxWidth: 360,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    border: "1px solid #ccc",
    fontSize: 14,
    outline: "none",
  },
  button: {
    padding: 14,
    borderRadius: 8,
    border: "none",
    background: "linear-gradient(90deg, #E3B7D3, #DDB5AC)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: 16,
    transition: "0.3s",
  },
  togglePassword: {
    fontSize: 12,
    color: "#DDB5AC",
    cursor: "pointer",
    marginBottom: 16,
    display: "inline-block",
  },
};

export default Login;
