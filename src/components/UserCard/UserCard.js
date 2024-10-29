import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const user = {
   username: "AlexGreetBoom",
   firstName: "Alex",
   secondName: "Boom",
   age: 25,
   date_registration: "10-10-2010",
   date_lastComing: "29-10-2024",
   image_url: "",
}

function UserCard(){
   return(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../../../logo192.png"  height={200} />
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Subtitle className='my-3'>First Name: {user.firstName} <br></br>Second Name: {user.secondName}</Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item><b>Date registration: </b>{user.date_registration}</ListGroup.Item>
          <ListGroup.Item><b>Date last seen: </b>{user.date_lastComing}</ListGroup.Item>
          <ListGroup.Item><b>Age: </b>{user.age}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
   );
}

export default UserCard;
