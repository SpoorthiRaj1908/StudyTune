function Navbar() {
  return (
    <>
      <nav
        className="navbar bg-light border-bottom border-body sticky-top shadow"
        data-bs-theme="dark"
      >
        <div className="container-fluid d-flex align-items-center">
          <div className="d-flex align-items-center">
            <img
              style={{ height: "60px", width: "60px", borderRadius: "50%" }}
              className="me-2"
              src="/Descargar icono de vector de audiolibro en blanco gratis.jpeg"
              alt="Audiobook icon"
            />
            <h4 className="text-dark m-0">
              STUDY <br /> TUNE
            </h4>
          </div>

          <button type="button" className="btn btn-ghost ms-auto me-2">
            Login
          </button>
         <button type="button" className="btn btn-dark me-2">
  SignUp
</button>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
