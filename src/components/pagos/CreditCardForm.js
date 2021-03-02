import React, { Component } from "react";

class CreditCardForm extends Component {
  render() {
    const { onChange, onSubmit, form } = this.props;
    return (
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="form-control"
              onChange={onChange}
              value={form.title}
            />{" "}
          </div>{" "}
          <div className="form-group">
            <input
              type="number"
              name="cardNumber"
              placeholder="Numero de tarjeta"
              className="form-control"              
              onChange={onChange}
              required
              value={form.description}
            />{" "}
          </div>{" "}          
          <div className="form-row">
            <div className="col">
              <input
                type="number"
                name="cvc"
                placeholder="CVC"
                max={9999}
                required
                className="form-control"
                onChange={onChange}
                value={form.leftColor}
              />{" "}
            </div>
            <div className="col">
              <input
                type="month"
                name="date"
                required
                placeholder="MM/AA"
                className="form-control"
                min="2021-12" max="2048-12"
                onChange={onChange}
                value={form.rightColor}
              />
            </div>
          </div>
          <p />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreditCardForm;
