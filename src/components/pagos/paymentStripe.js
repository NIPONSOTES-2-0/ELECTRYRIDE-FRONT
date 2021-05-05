import React, { useState } from "react";
import axios from "axios";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import imgBike from '../bicycle/images/bike.jpg';

const stripePromise = loadStripe(
  "pk_test_51IVIDAEq3EyAQ22JcIXMNjSdXmwFlL0T7fGjfa1J1bh9258Zu6fy7paSPSPclicoGKZdPgrf9b4CEqo0NeoXOQuS00MrCfWoUx"
);

const CheckoutForm = (props) => {
  
  const stripe = useStripe();
  //Para capturar los elementos de stripe como CardElement
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      console.log("payment method: ", paymentMethod);
      const { id } = paymentMethod;
      try {        
        const { data } = await axios.post("http://localhost:8080/stripe/payment", {
          id,          
          description: 'Aprender a aprender y como memorizar mejor',
          amount: 200000,
          currency: "COP",
          type: 'card'
        });
        console.log("Data from server: ", data);
        //Limpiamos el formulario de tarjeta de credito
        props.validatePay(true);
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log("Axios error: ", error);
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <img
        src={imgBike}
        alt="bike"
        className="img-fluid"
      />
      <h3 className="text-center my-2">price: $200</h3>
      <div className="form-group">
        <CardElement />
      </div>
      <button className="btn btn-success" disabled={!stripe}>
        {loading ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Pagar"
        )}
      </button>
    </form>
  );
};

const PaymentStripe = (props) => {  

  const validatePay = (valid) => {    
    props.isValidated(valid);
  };
    return(
        <Elements stripe={stripePromise}>
            <div className="container p-4">
                <div className="row h-100">
                    <div className="col-md-4 offset-md-4 h-100">
                        <CheckoutForm validatePay={validatePay}/>
                    </div>
                </div>
            </div>
        </Elements>
    )
};

export default PaymentStripe;