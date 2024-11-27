import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './ArtCard.css';


function ArtCard(props){
   const link_img = `https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg`;
   const title_text = props.item.title.length > 100 ? props.item.title.substring(0, 100) + '...' : props.item.title;
   const [flagImage, setFlagImage] = useState(true);

   async function fetchImage(url)
   {
      if (await fetch(url).then(response => response.status) === 200)
        return true;
      else
      {
        console.log("not image", url);
        setFlagImage(false);
        return false;
      }
   }
   return(
    <Card style = {{height: 650}}>
    <Card.Body>
      {flagImage ? <Card.Img className="img-border" style={{ maxHeight: '350px'}} variant='top' src={fetchImage(link_img) ? link_img : "" }/> : ""}
      <Card.Title className='text-center mt-2'>{title_text === "Untitled" ? "Without name": title_text}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted text-center">
        {props.item.artist_title === null ? "Author unknown": props.item.artist_title}
      </Card.Subtitle>
      <Card.Text className='mt-2'>
        {props.item.medium_display}
      </Card.Text>
    </Card.Body>
  </Card>
   );
}

export default ArtCard;
