import React from 'react';

export default function Output() {
  return (
    <div className="container-fluid mt-5">
      <div className="row" style={{ minHeight: '80vh' }}>
        {/* Left side: lyrics / notes */}
        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow-sm h-100" style={{ height: '100%' }}>
            <h5 className="card-title">Your Study Song Lyrics</h5>
            <div className="card-body" style={{ whiteSpace: 'pre-wrap', overflowY: 'auto', height: 'calc(100% - 2.5rem)' }}>
              {/* Replace this with dynamic lyrics */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
              Vivamus lacinia odio vitae vestibulum vestibulum.  
              Cras venenatis euismod malesuada.
            </div>
          </div>
        </div>

        {/* Right side: audio player */}
        <div className="col-md-6 mb-4 d-flex flex-column align-items-center justify-content-center">
          <h5 className="mb-3">Listen & Download</h5>
          <audio controls className="w-100 mb-3">
            <source src="/path/to/generated-song.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <a href="/path/to/generated-song.mp3" download className="btn btn-dark">
            &#8681; Download
          </a>
        </div>
      </div>
    </div>
  );
}
