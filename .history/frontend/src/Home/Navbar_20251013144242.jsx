function Navbar() {
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              style={{ height: "60px", width: "60px", borderRadius: "50%" }}
              className="me-2"
              src="/Descargar icono de vector de audiolibro en blanco gratis.jpeg"
              alt="Audiobook icon"
            />
            <h4 className="text-light m-0">Study <br></br>Tune</h4>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
