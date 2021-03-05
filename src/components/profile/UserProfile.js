import React from 'react';
//import axios from 'axios';

class UserProfile extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            datos: []
        };
    }
    

    async componentDidMount(){
        const response = await fetch('http://localhost:8080/');        
        const data = await response.json();
        console.log("Data: ",data);
        var arr = [];
        Object.keys(data).forEach(function(key) {
        arr.push(data[key]);
        });
        console.log("array: ", arr);
        this.setState({
            datos: arr
        });
        return arr;
    }



    render(){
        //const datos = this.getDataFromSpring();        
        console.log("datooos: ",this.state.datos);
        const usuarios = this.state.datos === [] ?  null : this.state.datos;
        return(                 
            <div>
                <h2>Los usuarios registrados actualmente son: </h2>
                {usuarios!== null? usuarios.map((usuario, index) => {
                    return <h3>Usuario: {usuario}</h3>
                }): ''}
                <h1>Bienvenido a el perfil</h1>
            </div>
        );
    }
    

};

export default UserProfile;