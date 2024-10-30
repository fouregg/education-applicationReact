import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { EnvelopeAtFill, Phone, PersonWorkspace } from 'react-bootstrap-icons'; 
import './UserCard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const user = {
   email: "alex@gmail.com",
   firstName: "Alex",
   secondName: "Boom",
   age: 25,
   phone: "+7(800)-555-35-35",
   experience: 4,
   image_url: "",
}

function UserCard(){
   return(
      <Card className='userCard'>
      <Card.Img className='imgCard p-5 mb-0' variant="top" src="../../../logo192.png"  height={100} />
      <Card.Body>
        <Card.Title className='mb-2'>
          {user.firstName} {user.secondName}
        </Card.Title>
        <Card.Subtitle className='mb-1'>
          <Row className='m-2'>
            <Col sm={4}>
              <EnvelopeAtFill size={30}/> 
            </Col>
            <Col sm={8} className='mt-1'>
              {user.email}
            </Col>
          </Row>
        </Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col sm={2}>
                <Phone size={20}/> 
              </Col>
              <Col sm={10} className='mt-1'>
                <b>{user.phone}</b>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col sm={2}>
                <PersonWorkspace size={20}/> 
              </Col>
              <Col sm={10} className='mt-1'>
                <b>Experience: {user.experience} years</b>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item><b>Age: </b>{user.age}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
   );
}

export default UserCard;
