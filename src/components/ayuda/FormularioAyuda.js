import React, { Component } from "react";
//import axios from "axios";
import "./styles/FormularioAyuda.css";
class FormularioAyuda extends Component {
  constructor(props) {
    super(props);
    this.state = { var: null };
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("Datos obtenidos!!");
    console.log("email:", e.target[0].value);
    console.log("nombre:", e.target[1].value);
    console.log("info:", e.target[2].value);
    /*
    var email = e.target[0].value;
    var nombre = e.target[1].value;
    var info = e.target[2].value;

    const datos = {
      email: email,
      nombre: nombre,
      info: info,
    };

    axios({
            method: 'post',
            url: '',
            data:{
                datos
            }
        });*/
  };

  render() {
    return (
      <div className="fondo">
        <h1> Formulario de ayuda </h1>
        <div className="card card-body">
          <form className="formulario-ayuda" conSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Escribe tu correo"
                className="form-control"
                autoFocus
              />
            </div>
            {""}
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                placeholder="Cual es tu nombre?"
                className="form-control"
              />
            </div>
            {""}
            <div className="form-group">
              <select className="custom-select">
                <option value="default">Selecciona el tipo de ayuda</option>
                <option value="queja">Queja</option>
                <option value="pregunta">Pregunta</option>
                <option value="opinion">Opinion</option>
              </select>
            </div>
            {""}
            <div className="form-group">
              <textarea
                type="text"
                name="informacion"
                placeholder="Escribe tus dudas y comentarios"
                rows="10"
                cols="22"
                className="form-control"
              />
            </div>
            {""}
            <button type="button" className="btn btn-primary">
              Enviar
            </button>
          </form>
          {""}
        </div>
      </div>
    );
  }
}

export default FormularioAyuda;
