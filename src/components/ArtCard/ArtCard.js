import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { EnvelopeAtFill, Phone, PersonWorkspace } from 'react-bootstrap-icons'; 
import './ArtCard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const user = {
   title: "De ou par Marcel Duchamp ou Rrose Sélavy",
   popular: false,
   date_start: 1941,
   date_end: 1941,
   artist: "Marcel Duchamp",
   place_of_orign: "Paris",
   artist_id: 34316,
   medium_display: "Brown leather valise with handle containing sixty-nine miniature replicas and printed reproductions and one original, Sonate,1938, hand-colored collotype"
}

function ArtCard(props){
  console.log(props);
   return(
    <Card>
    <Card.Body>
      <Card.Title>{props.item.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.item.artist_display}</Card.Subtitle>
      <Card.Text>
        {props.item.medium_display}
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
   );
}

export default ArtCard;
