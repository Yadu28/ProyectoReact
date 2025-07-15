import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    telefono: '',
    password1: '',
    password2: '',
    sexo: '',
    nacionalidad: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password1 !== formData.password2) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Datos del formulario:', formData);
    alert('Formulario enviado con éxito');
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center">
      <div className="card shadow-sm" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Formulario</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombres" className="form-label">Nombres</label>
              <input type="text" className="form-control" id="nombres" name="nombres" value={formData.nombres} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="apellidos" className="form-label">Apellidos</label>
              <input type="text" className="form-control" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
              <input type="date" className="form-control" id="fechaNacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Número de teléfono</label>
              <input type="tel" className="form-control" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+57" required />
            </div>

            <div className="mb-3">
              <label htmlFor="password1" className="form-label">Escriba contraseña</label>
              <input type="password" className="form-control" id="password1" name="password1" value={formData.password1} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="password2" className="form-label">Repita contraseña</label>
              <input type="password" className="form-control" id="password2" name="password2" value={formData.password2} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Sexo:</label><br />
              <div>
                <input type="radio" id="sexoMasculino" name="sexo" value="Masculino" checked={formData.sexo === 'Masculino'} onChange={handleChange} required />
                <label htmlFor="sexoMasculino" className="ms-2 me-3">Masculino</label>

                <input type="radio" id="sexoFemenino" name="sexo" value="Femenino" checked={formData.sexo === 'Femenino'} onChange={handleChange} />
                <label htmlFor="sexoFemenino" className="ms-2 me-3">Femenino</label>

                <input type="radio" id="sexoOtro" name="sexo" value="Otro" checked={formData.sexo === 'Otro'} onChange={handleChange} />
                <label htmlFor="sexoOtro" className="ms-2">Otro</label>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="nacionalidad" className="form-label">Nacionalidad:</label>
              <select id="nacionalidad" name="nacionalidad" className="form-control" value={formData.nacionalidad} onChange={handleChange} required>
                <option value="" disabled>Seleccione un país</option>
                <option value="CO">Colombia</option>
                <option value="VE">Venezuela</option>
                <option value="AR">Argentina</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">Enviar</button>
          </form>
        </div>
        <small className="text-muted d-block text-center mt-3">
          ¿Volver al Inicio? <a href="/login">Iniciar Sesión</a>
        </small>
      </div>
    </div>
  );
};

export default RegisterPage;

