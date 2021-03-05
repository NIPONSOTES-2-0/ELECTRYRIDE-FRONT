import React, { useState, useEffect } from "react";
import Loading from "../loading/Loading";
import axios from "axios";

const UserProfile = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const URL = "http://localhost:8080/api/usuarios/";
    let header = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8080",
        },
      };
    axios
      .get(URL + "users", header)
      .then((response) => {
        var res = response.data;                
        var usuarios = Object.keys(res).map((key, index) => res[key]);
        console.log("usuarios de bd: ",usuarios);                        
        setLoading(false);
        setUsers(usuarios);        
        
      })
      .catch((error) => {
        console.log("Error with axios & bd: ",error);
        setLoading(true);
        //setError(error);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>Bienvenido a el perfil</h1>
          <h2>Los usuarios registrados actualmente son: </h2>
          {users !== null
            ? users.map((usuario, index) => {
                return (<div>
                    <h3>Usuario</h3>
                    <h4>{usuario.name}</h4>
                    <h4>{usuario.lastname}</h4>
                    <h5>{usuario.email}</h5>
                    </div>);
              })
            : ""}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
