function Body() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left side — image */}
        <div className="col-md-6 text-center">
          <img src="/Où trouver les meilleurs livres audio _.jpeg"></img>
        </div>

        {/* Right side — text/content */}
        <div className="col-md-6" style={{ marginTop: "-320px" }}>
          <h1
            className="text-dark fw-bold mb-4 mt-1"
            class="font-serif "
            style={{ fontSize: "30px" }}
          >
            STUDY TUNE
          </h1>
          <p
            className="text-secondary"
            style={{ fontSize: "20px" }}
            class="font-sans"
          >
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
          <form>
            <label htmlFor="song-link">Enter Song Link:</label>
            <input
              type="url"
              id="song-link"
              name="song-link"
              placeholder="Paste your song URL here"
              className="form-control mb-3"
              required
            />

            <label htmlFor="notes-upload">Upload Notes (PDF/JPG):</label>
            <input
              type="file"
              id="notes-upload"
              name="notes-upload"
              accept=".pdf,.jpg,.jpeg,.png"
              className="form-control mb-3"
              required
            />

            <button type="submit" className="btn btn-primary">
              Generate Study Song
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Body;
