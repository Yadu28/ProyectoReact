import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import Swal from 'sweetalert';
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
          title: 'Sesión cerrada',
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
    <div className="container mt-5">
      <h2 className="mb-4">Panel de Control</h2>
      <div className="container mt-5">
      <p>Bienvenido al panel. Aquí puedes acceder a tus datos, configuraciones y más.</p>

      <div className="mt-4">
        <Link to="/" className="btn btn-secondary me-2">Ir a Inicio</Link>
        <Link to="/login" className="btn btn-danger">Cerrar Sesión</Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active">Inicio</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Perfil</span>
              </li>
            </ul>
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-5 text-center">
        <h1>Bienvenido a mi página</h1>
      </div>
    </div>
  );
}

export default DashboardPage;
