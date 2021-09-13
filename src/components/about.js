import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container } from 'reactstrap';
import about from "./about.jpg";
const About = (props) => {
  const {
   // buttonLabel,
    className
  } = props;
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Container className="themed-container" fluid={true}>
      <main>
      <img src={about} alt="tec.no"></img>
    <div>
      <Button color="danger" onClick={toggle}>{"About me"}</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>About me</ModalHeader>
        <ModalBody>
        Hi there, my name is Samir Kogan <br></br> and I am a Full-Stack Web-Developer. <br></br>
        I have done my learning of Web-Development @ <a href="http://www.supercode.de">SuperCode</a> <br></br>
        This application is made for studying purposes only. <br></br>
        There are no commercial use of this application at all. <br></br>
        All rights belong to their respective owners <br></br>
        
        Please contact me if you have any questions. <br></br>  
        <a href="mailto:samir.kogan@gmail.com">samir.kogan@gmail.com</a>
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    </main>
    </Container>
  );
}

export default About;