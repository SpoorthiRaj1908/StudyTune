import React from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const navigate = useNavigate();

  const handleGenerate = (e) => {
    e.preventDefault();
    navigate("/output");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-dark fw-bold mb-4">Upload Notes & Enter Song Link</h2>

      <form
        className="p-3 border rounded shadow d-flex flex-column gap-3"
        onSubmit={handleGenerate}
      >
        {/* Song URL input */}
        <div>
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
        <div>
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
        <div>
          <button type="submit" className="btn btn-primary">
            Generate Study Song
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
