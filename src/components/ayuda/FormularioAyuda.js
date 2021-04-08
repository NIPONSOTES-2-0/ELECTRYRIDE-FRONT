import React, { useState } from "react";
import axios from "axios";
import "./styles/FormularioAyuda.css";
import Loading from '../loading/Loading';


export const FormularioAyuda = () => {
  const [email, setEmail] = useState(0);
  const [name, setName] = useState(0);
  const [info, setInfo] = useState(0);
  const [thelp, setThelp] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) =>{
    setLoading(false);
    e.preventDefault();
    if(!email.length || !name.length || !info.length || !thelp.length){
      alert("Por favor complete todos los campos");
    }
    try{
      sendHelp();
      setLoading(false);
      
    } catch(e){
      console.log("error en el formulario");
      setLoading(false);
    }

  };

  const sendHelp = () => {
    const URL = "http://localhost:8080/api/b-ayuda/"
    const ayuda = {
      email: email,
      name: name,
      thelp: thelp,
      info: info
    };

    axios
      .post(URL + "register", ayuda)
      .then((res) => res.data)
      .catch((err) => {
        console.log("Error al enviar formulario", err);
      });
      console.log("Formulario enviado :D");
  };
  
    return (
      <>
      {loading ? <Loading />: ""}
      <div className="fondo">
        <h1> Formulario de ayuda </h1>
        <div className="card card-body">
          <form className="formulario-ayuda" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                id="email"
                name="email"
                placeholder="Escribe tu correo"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
                autoFocus
              />
            </div>
            {""}
            <div className="form-group">
              <input
                id="nombre"
                name="name"
                placeholder="Cual es tu nombre?"
                className="form-control"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            {""}
            <div className="form-group">
              <select 
              id="thelp"
              name="thelp"
              className="form-control"
              onChange={(event) => setThelp(event.target.value)}
              >
                <option value="Default">Selecciona el tipo de ayuda</option>
                <option value="queja">Queja</option>
                <option value="pregunta">Pregunta</option>
                <option value="opinion">Opinion</option>
              </select>
            </div>
            {""}
            <div className="form-group">
              <textarea
                id="info"
                name="info"
                placeholder="Escribe tus dudas y comentarios"
                rows="10"
                cols="22"
                className="form-control"
                onChange={(event) => setInfo(event.target.value)}
              />
            </div>
            {""}
            <button 
            type="submit" 
            className="btn btn-primary">
              Enviar
            </button>
          </form>
          {""}
        </div>
      </div>
      </>
    );
  
};

