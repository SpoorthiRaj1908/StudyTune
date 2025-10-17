import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("SignUp clicked");

    // Frontend validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      console.log("Invalid email:", email);
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 8+ chars, include 1 uppercase, 1 number & 1 symbol."
      );
      console.log("Invalid password:", password);
      return;
    }

    try {
      const requestBody = { username, email, password };
      console.log("Sending signup request:", requestBody);

      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      console.log("Response received:", response);

      // Safely parse JSON
      let data;
      try {
        data = await response.json();
      } catch (err) {
        console.error("Error parsing JSON:", err);
        data = { message: "Invalid server response" };
      }

      console.log("Response JSON:", data);

      if (!response.ok) {
        setError(data.message || `Error ${response.status}`);
        setMessage("");
        console.log("Signup failed:", data.message);
      } else {
        setError("");
        setMessage(data.message || "Account created successfully!");
        console.log("Signup success:", data.message);

        // Redirect to login after 1.5s
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (err) {
      console.error("Signup frontend error:", err);
      setError("Server error. Please try again later.");
      setMessage("");
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
          <h1 style={{ color: "white", marginTop: 20 }}>Start your journey</h1>
          <p style={{ color: "white", fontSize: 16 }}>
            Create an account and start your journey!
          </p>
        </div>
      </div>

      <div style={styles.right}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: 24, color: "#333" }}>Sign Up</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
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

          {error && <p style={{ color: "red", marginBottom: 16 }}>{error}</p>}
          {message && <p style={{ color: "green", marginBottom: 16 }}>{message}</p>}

          <button type="submit" style={styles.button}>
            Sign Up
          </button>

          <p style={{ marginTop: 16, fontSize: 14 }}>
            Already have an account?{" "}
            <span
              style={{ color: "#E3B7D3", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
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

export default SignUp;
