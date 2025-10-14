import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar bg-light border-bottom sticky-top shadow">
      <div className="container-fluid d-flex align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="/Descargar icono de vector de audiolibro en blanco gratis.jpeg"
            alt="Audiobook"
            style={{ height: 60, width: 60, borderRadius: '50%' }}
            className="me-2"
          />
          <h4 className="m-0 font-serif text-dark">STUDY <br /> TUNE</h4>
        </div>
        <button className="btn btn-outline-dark ms-auto me-2" onClick={() => navigate('/login')}>Login</button>
        <button className="btn btn-outline-dark" onClick={() => navigate('/signup')}>SignUp</button>
      </div>
    </nav>
  );
}

export default Navbar;
