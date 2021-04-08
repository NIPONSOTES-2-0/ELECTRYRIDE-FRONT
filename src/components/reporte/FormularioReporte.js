import React, { useState } from "react";
import axios from "axios";
import "./styles/FormularioReporte.css";
import Loading from '../loading/Loading';

export const FormularioReporte = () => {
    const [treport, setTreport] = useState(0);
    const [desc, setDesc] = useState(0);
    const [email, setEmail] = useState(0);
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = (e) =>{
      setLoading(false);
      e.preventDefault();
      if(!treport.length || !desc.length || !email.length){
        alert("Por favor complete todos los campos");
      }
      try{
        sendReport();
        setLoading(false);
        
      } catch(e){
        console.log("error en el formulario");
        setLoading(false);
      }
  
    };
  
    const sendReport = () => {
      const URL = "http://localhost:8080/api/reporte/"
      const reporte = {
        treport: treport,
        desc: desc,
        email: email,
      };
  
      axios
        .post(URL + "register", reporte)
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
          <h1> Tuviste algun problema con el servicio? </h1>
          <div className="card card-body">
            <form className="formulario-reporte" onSubmit={handleSubmit}>
              <div className="form-group">
                <select 
                id="treport"
                name="treport"
                className="form-control"
                onChange={(event) => setTreport(event.target.value)}
                >
                  <option value="Default">Que problema surgio?</option>
                  <option value="Accidente">Accidente vial</option>
                  <option value="Fallo">Fallo en el equipo</option>
                  <option value="otro">otro</option>
                </select>
              </div>
              {""}
              <div className="form-group">
                <textarea
                  id="desc"
                  name="desc"
                  placeholder="Describe el problema"
                  rows="10"
                  cols="22"
                  className="form-control"
                  onChange={(event) => setDesc(event.target.value)}
                />
              </div>
              {""}
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
  