import React, { useState } from "react";
import axios from "axios";
import "./styles/FormularioApoyo.css";
import Loading from '../loading/Loading';

export const FormularioApoyo = () => {
    const [email, setEmail] = useState(0);
    const [name, setName] = useState(0);
    const [info, setInfo] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) =>{
        setLoading(false);
        e.preventDefault();
        if(!email.length || !name.length || !info.length){
          alert("Por favor complete todos los campos");
        }
        try{
          sendSupport();
          setLoading(false);
          
        } catch(e){
          console.log("error en el formulario");
          setLoading(false);
        }
    
      };
    
      const sendSupport = () => {
        const URL = "http://localhost:8080/api/apoyo/"
        const apoyo = {
          email: email,
          name: name,
          info: info
        };
    
        axios
          .post(URL + "register", apoyo)
          .then((res) => res.data)
          .catch((err) => {
            console.log("Error al enviar formulario", err);
          });
          console.log("Formulario enviado :D");
      };

      return (
        <>
        {loading ? <Loading />: ""}
          <h1> Quieres ayudarnos?? </h1>
          <div className="card card-body">
            <form className="formulario-apoyo" onSubmit={handleSubmit}>
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
                  placeholder="Cual es la empresa a ayudar?"
                  className="form-control"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              {""}
              <div className="form-group">
                <textarea
                  id="info"
                  name="info"
                  placeholder="Escribe con que podrias ayudarnos"
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
        </>
      );


};