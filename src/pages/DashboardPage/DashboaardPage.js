// src/pages/DashboardPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function DashboardPage() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Panel de Control</h2>
      <p>Bienvenido al panel. Aquí puedes acceder a tus datos, configuraciones y más.</p>

      <div className="mt-4">
        <Link to="/" className="btn btn-secondary me-2">Ir a Inicio</Link>
        <Link to="/login" className="btn btn-danger">Cerrar Sesión</Link>
      </div>
    </div>
  );
}

export default DashboardPage;
