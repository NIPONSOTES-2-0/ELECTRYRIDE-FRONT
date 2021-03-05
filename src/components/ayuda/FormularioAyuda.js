
import React, {Component} from 'react';
import axios from 'axios';
import "./styles/FormularioAyuda.css";
class FormularioAyuda extends Component{
    constructor(props){
        super(props);
        this.state = {var : null};


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

<<<<<<< HEAD
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
=======
    onSubmit = (e) => {
        e.preventDefault();
        console.log("Datos obtenidos!!")
        console.log("email:",e.target[0].value);
        console.log("nombre:",e.target[1].value);
        console.log("info:",e.target[2].value);
        var email = e.target[0].value;
        var nombre = e.target[1].value
        var info = e.target[2].value;
        const datos = {
            email: email,
            nombre: nombre,
            info: info
        }

        /*axios({
            method: 'post',
            url: '',
            data:{
                datos
            }
        });*/
    }

    render(){
        return(<div className="fondo">
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
                            </div>{""}
                            <div className="form-group">
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Cual es tu nombre?"
                                className="form-control"
                            />
                            </div>{""}
                            <div className="form-group">
                                <select className="custom-select">
                                <option value="default">Selecciona el tipo de ayuda</option>
                                <option value="queja">Queja</option>
                                <option value="pregunta">Pregunta</option>
                                <option value="opinion">Opinion</option>
                                </select>
                            </div>{""}
                            <div className="form-group">
                                <textarea
                                type="text"
                                name="informacion"
                                placeholder="Escribe tus dudas y comentarios"
                                rows="10"
                                cols="22"
                                className="form-control"
                            />
                            </div>{""}
                            <button type="button" className="btn btn-primary">Enviar</button>
                        </form>{""}
                    </div>
                </div>
                );
            
    }
>>>>>>> main
}

export default FormularioAyuda;
