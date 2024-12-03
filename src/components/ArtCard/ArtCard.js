import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './ArtCard.css';
import axios from 'axios';

function ArtCard(props){
   const link_img = `https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg`;
   const title_text = props.item.title.length > 100 ? props.item.title.substring(0, 100) + '...' : props.item.title;
   const [flagImage, setFlagImage] = useState(true);

   async function fetchImage(url)
   {
      return await axios(url).then(response => response.ok).catch(() => 
      {
         setFlagImage(false);
         return false;
      });
   }
   return(
    <Card style = {{height: 550}} className='shadow p-3 mb-5 bg-white rounded'>
    <Card.Body>
      {flagImage  
        ? <Card.Img className="img-border" style={{ maxHeight: '320px'}} variant='top' src={fetchImage(link_img) ? link_img : "" }/> 
        : <h5 className='text-center text-danger' style={{height: '300px'}}>No image</h5>
      }
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
