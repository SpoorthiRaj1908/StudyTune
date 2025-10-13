function Body() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left side — image */}
        <div className="col-md-6 text-center">
          <img src="/Où trouver les meilleurs livres audio _.jpeg"></img>
        </div>

        {/* Right side — text/content */}
        <div className="col-md-6" style={{ marginTop: "-320px"}}>
          <h1 className="text-dark fw-bold mb-3" style={{fontSize:"30px"}}>STUDY TUNE</h1>
          <p className="text-secondary" style={{fontSize:"20px"}}>
            Welcome to <strong>Study Tune</strong> — your personalized study
            companion. Explore curated study materials, audio lessons, and
            interactive tools designed to make your learning experience better
            and smarter. Turn your study notes into songs and make learning fun
            like never before! With the Study-to-Song Converter, boring text
            comes alive as melodies, complete with rhythm and pitch, so you can
            memorize faster while enjoying the process. Perfect for students of
            all ages, kids who love music, or anyone who struggles to stay
            focused, this tool transforms ordinary study material into an
            engaging audio experience. Simply paste your notes, tweak the tempo
            and tune, and listen as your content sings — making every study
            session creative, memorable, and a little more magical.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
