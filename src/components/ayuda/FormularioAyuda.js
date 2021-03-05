import React, { Component } from "react";
import axios from 'axios';
import './styles/ayuda.css';

class FormularioAyuda extends Component {
  constructor(props) {
    super(props);
    this.state = { var: null };
  }

  //Se crea una funcion en react
  onSubmit = (e) => {
      e.preventDefault();
      console.log("ENTRANDO EN SUBMIT!!!: ",e.target);
      console.log("primer input (correo): ",e.target[0].value);
      console.log("segundo input (nombre): ",e.target[1].value);
      console.log("tercer input: (informacion): ",e.target[2].value);
      var correo = e.target[0].value;
      let nombre = e.target[1].value;
      const mensaje = e.target[2].value;
      const datos = {
          correo: correo,
          nombre: nombre,
          mensaje: mensaje
      }
      axios({
        method: 'post', 
        url: 'http://localhost:8080/post_ayuda',
        data: {
          datos
        }
      });

  }

  render() {
    return (
      <div>
        <h1> Formulario de ayuda </h1>
        <div className="card card-body">
          <form onSubmit={this.onSubmit}>
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
            <br />
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
            <button className="btn btn-success btn-block">Enviar</button>
          </form>
          {""}
        </div>
      </div>
    );
  }
}

export default FormularioAyuda;
