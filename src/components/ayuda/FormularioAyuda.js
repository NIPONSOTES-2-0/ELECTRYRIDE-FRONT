import React, {Component} from 'react';

class FormularioAyuda extends Component{
    constructor(props){
        super(props);
        this.state = {var : null};

    }

    render(){
        return(<div>
                    <h1> Formulario de ayuda </h1>
                    <div className="card card-body">
                        <form onSubmit={this.props.onSubmit}>
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
                            <br/>
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
                            <button className="btn btn-success btn-block">Enviar</button>
                        </form>{""}
                    </div>
                </div>
                );
            
    }
}

export default FormularioAyuda;