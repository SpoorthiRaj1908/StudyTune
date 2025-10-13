function Navbar() {
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid d-flex align-items-center">
          {/* Logo + text on the left */}
          <div className="d-flex align-items-center">
            <img
              style={{ height: "60px", width: "60px", borderRadius: "50%" }}
              className="me-2"
              src="/Descargar icono de vector de audiolibro en blanco gratis.jpeg"
              alt="Audiobook icon"
            />
            <h4 className="text-light m-0">
              STUDY <br /> TUNE
            </h4>
          </div>

          {/* Button on the right */}
          <button type="button" className="btn btn-light ms-auto">
            Login
          </button>
           <button type="button" className="btn btn-light mr-2">
            SignUp
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
