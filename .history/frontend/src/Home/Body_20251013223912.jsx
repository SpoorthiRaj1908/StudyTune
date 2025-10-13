import React from "react";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();

  const handleGenerate = (e) => {
    e.preventDefault(); // prevent default form submission
    // Optionally, get song URL and notes here
    // const songLink = e.target["song-link"].value;
    // const notesFile = e.target["notes-upload"].files[0];

    navigate("/output"); // Redirect to Output page
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left side — image */}
        <div className="col-md-6 text-center" style={{ marginTop: "-65px" }}>
          <img src="/Où trouver les meilleurs livres audio _.jpeg" alt="Study Tune" />
        </div>

        {/* Right side — text/content */}
        <div className="col-md-6" style={{ marginTop: "-125px" }}>
          <h1
            className="text-dark fw-bold mb-6 mt-1 font-serif"
            style={{ fontSize: "30px" }}
          >
            STUDY TUNE
          </h1>
          <p
            className="text-secondary mb-7 font-sans"
            style={{ fontSize: "20px" }}
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

          <form
            className="d-flex gap-3 p-3 border rounded shadow"
            onSubmit={handleGenerate} // handle submit
          >
            {/* Song URL input */}
            <div className="flex-grow-1">
              <label htmlFor="song-link" className="form-label fw-bold">
                Song Link
              </label>
              <input
                type="url"
                id="song-link"
                name="song-link"
                placeholder="Paste url"
                className="form-control"
                required
              />
            </div>

            {/* Notes upload input */}
            <div className="flex-grow-1">
              <label htmlFor="notes-upload" className="form-label fw-bold">
                Upload Notes
              </label>
              <input
                type="file"
                id="notes-upload"
                name="notes-upload"
                accept=".pdf,.jpg,.jpeg,.png"
                className="form-control"
                required
              />
            </div>

            {/* Submit button */}
            <div className="align-self-end">
              <button type="submit" className="btn btn-primary mt-2">
                Generate Study Song
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Body;
