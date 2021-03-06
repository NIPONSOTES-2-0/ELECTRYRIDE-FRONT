import React, { useState, useEffect, useContext } from "react";
import Loading from "../loading/Loading";
import { UserContext } from '../../contexts/UserContext';

const UserProfile = () => {
  const [usuarios, setUsuarios] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    users
  } = useContext(UserContext);
  

  useEffect(() => {
    setLoading(true);        
    usuarios !== null ? setLoading(false): setLoading(true);    
    setUsuarios(users);
  }, [users]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>Bienvenido a el perfil</h1>
          <h2>Los usuarios registrados actualmente son: </h2>
          {usuarios !== null
            ? usuarios.map((usuario, index) => {
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
