function Body() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left side — image */}
        <div className="col-md-6 text-center">
        <img src="/Où trouver les meilleurs livres audio _.jpeg"></img>
        </div>

        {/* Right side — text/content */}
        <div className="col-md-6">
          <h2 className="text-dark fw-bold mb-3">STUDY TUNE</h2>
          <p className="text-secondary">
            Welcome to <strong>Study Tune</strong> — your personalized study companion.  
            Explore curated study materials, audio lessons, and interactive tools  
            designed to make your learning experience better and smarter.
          </p>
          <button className="btn btn-primary mt-2">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
