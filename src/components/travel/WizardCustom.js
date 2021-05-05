import React, {useState} from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import ViewMapHook from "../map/ViewMapHook";
import BikeInfo from "../bicycle/BikeInfo";
import TravelSimulation from "./TravelSimulation";
import BikeContextProvider from "../../contexts/BikeContext";
import ParkingContextProvider from "../../contexts/ParkingContext";
import PaymentStripe from "../pagos/paymentStripe";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";


let originT=null;
let destinationT=null;

let firstValidated = false;
let secondValidated = false;
let thirdValidated = false;

const FirstStep = React.forwardRef((props, ref) => {

  const setDirections = (origin, destination) => {
    
    //console.log("\nEN WIZARD: ","originW: ",origin,"destinationW: ",destination);
    originT = origin;
    destinationT = destination;    
  };

  const firstStepValidated = (valid) => {            
    firstValidated = valid? true: false;    
  };


  const [randomState, setRandomState] = React.useState(
    "1. This is a random state for first step."
  );
  
  React.useImperativeHandle(ref, () => ({
    isValidated: () => {      
      return firstValidated;
    },
    state: {
      randomState,
    },
  }));  
  //return <h1>Mapa</h1>;
  return <ParkingContextProvider><ViewMapHook setDirections={setDirections} isValidated={firstStepValidated}/></ParkingContextProvider>;
});

const SecondStep = React.forwardRef((props, ref) => {

  
  const secondStepValidated = (valid) => {            
    secondValidated = valid? true: false;    
  };

  const [randomState, setRandomState] = React.useState(
    "2. This is a random state for second step."
  );
  
  React.useImperativeHandle(ref, () => ({
    isValidated: () => {      
      return secondValidated;
    },
    state: {
      randomState,
    },
  }));  
  return <BikeContextProvider><BikeInfo isValidated={secondStepValidated} /></BikeContextProvider>;
});

const ThirdStep = React.forwardRef((props, ref) => {

  const thirdStepValidated = (valid) => {             
    thirdValidated = valid? true: false;    
  };

  const [randomState, setRandomState] = React.useState(
    "3. This is a random state for third step."
  );
  React.useImperativeHandle(ref, () => ({
    isValidated: () => {      
      return thirdValidated;
    },
    state: {
      randomState,
    },
  }));    
  
  return <PaymentStripe isValidated={thirdStepValidated}/>;
});

const FourthStep = React.forwardRef((props, ref) => {
  const [randomState, setRandomState] = React.useState(
    "4. This is a random state for fourth step."
  );
  React.useImperativeHandle(ref, () => ({
    isValidated: undefined,
    state: {
      randomState,
    },
  }));
  return <TravelSimulation origin={originT} destination={destinationT}/>; //<PaymentStripe />
});

var steps = [  
  { stepName: "Ruta", component: FirstStep },  
  { stepName: "Bicicleta", component: SecondStep },  
  { stepName: "Paga", component: ThirdStep },
  { stepName: "Viaje", component: FourthStep },  
];

function WizardExample() {
  const finishButtonClick = (allStates) => {
    console.log(allStates);
    document.location.href = "/perfil";    
  };
  return (
    <Container fluid style={{ marginTop: "15px" }}>      
      <Row>
        <Col xs={12} md={6} className="mr-auto ml-auto">
          <ReactWizard

            steps={steps}
            //navSteps            
            description="Escoge tu ruta, alquila una bici y que comience el viaje!"
            //headerTextCenter
            validate
            color="primary"
            finishButtonClick={finishButtonClick}
          />
        </Col>
      </Row>
    </Container>
  );
}


export default WizardExample;


