import React from "react";
import { Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

/*
   position: 'absolute',
    top: '50%',
    left: '50%',    
    transform: 'translate(-50%, -50%)'
    
*/
const modalStyle = { 
    width: '100%',
    top: '35%'
};


const CustomModal = ({ price, showModal, toggleModal, error }) => {  
  const success = ["Costo de tu viaje", "Precio de tu viaje: "];
  const fail = ["Error", "Debes planear un viaje antes! "];
  return (
    <Modal isOpen={showModal} style={modalStyle}>
      <ModalHeader>
        {error? fail[0]: success[0]}        
      </ModalHeader>
      <ModalBody>
        <strong>{error? fail[1]: (success[1] + price)}</strong>
      </ModalBody>
      <ModalFooter>
        <Row>
          <Button color="danger" onClick={toggleModal}>
            Volver
          </Button>
          {error?'': <Button color="success">Iniciar viaje</Button>}
          
        </Row>
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
