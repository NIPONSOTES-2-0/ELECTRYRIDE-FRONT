import React, { Component } from "react";
import CreditCardForm from "./CreditCardForm";
import Loading from "../loading/Loading";
import "./styles/AddCreditCard.css";
import MasterCard from "./images/card.png";
//import { withRouter } from "react-router-dom"; withRouter

class AddCreditCard extends Component {
  state = {
    form: {
      name: "",
      cardNumber: "",
      cvc: "",
      date: "",
    },
    error: null,
    loading: false,
  };

  handleSubmit = (e) => {
    this.setState({
      loading: true,
    });
    e.preventDefault();
    try {      
      this.setState({
        loading: false,
      });
      this.props.history.push("/perfil");
    } catch (error) {
      console.log("Capturando error de post: ",error);
      this.setState({
        loading: false,
        error,
      });
    }
  };

  changeHandler = (e) => {    
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    //<Card />
    if (this.state.loading) return <Loading />;
    return (
      <div className="ExerciseNew_Lateral_Spaces row">
        <div className="col-sm ExerciseNew_Card_Space">
          <img src={MasterCard} alt="cards" height={200} />
        </div>
        <div className="col-sm ExerciseNew_Form_Space">
          <CreditCardForm
            onChange={this.changeHandler}
            onSubmit={this.handleSubmit}
            form={this.state.form}
          />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default AddCreditCard;
