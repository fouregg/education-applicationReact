import React from 'react';
import Card from 'react-bootstrap/Card';
import './ArtCard.css';



function ArtCard(props){
   const link_img = `https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg`;
   const title_text = props.item.title.length > 100 ? props.item.title.substring(0, 100) + '...' : props.item.title;
   return(
    <Card style = {{height: 650}}>
    <Card.Body>
      <Card.Img variant='top' src={link_img}/>
      <Card.Title>{title_text}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.item.artist_title}</Card.Subtitle>
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
