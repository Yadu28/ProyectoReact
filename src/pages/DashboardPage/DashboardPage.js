import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Deseas cerrar sesión?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        await Swal.fire({
          icon: 'success',
          title: 'Sesión cerrada correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error al cerrar sesión',
          text: error.message,
        });
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-danger text-white">
        <nav className="navbar navbar-expand-lg bg-danger navbar-custom"></nav>
        <div className="container">
          <Link className="navbar-brand text-white" to="/">MAVII</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <a className='nav-link' href='/users'>Users</a>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/perfil">Perfil</Link>
              </li>
            </ul>
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h1 className="text-white">Bienvenido al Panel de Control</h1>
          <p className="text-light">Administra tus datos, configuraciones y más.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-20">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title mb-3">¿Qué deseas hacer?</h5>
                <Link to="/" className="btn btn-secondary me-2">Ir a Inicio</Link>
                <button onClick={handleLogout} className="btn btn-danger">Cerrar Sesión</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
