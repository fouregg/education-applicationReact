import './App.css';
import ArtCard from './components/ArtCard/ArtCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';


const base_url = "https://api.artic.edu/api/v1";
const limit = 20;
async function getArtworksFromPage(page) {
 
}

function App() {
  const [massArt, setArt] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async() =>
    {
      try{
        let jsonData = await fetch(`${base_url}/artworks?$page=${1}&limit=${limit}`).then(responce => responce.json());
        setArt(jsonData.data);
      }
      catch(error)
      {
        console.log("Problem to fetch data from API!");
      }
    }
      if(massArt.length !== 0)
        setLoading(true);
      if(!isLoading)
        fetchData();
  });

  return (
    <Container>
      <Row xl = {4} md sm = {2} xs = {1}>
        {
          massArt.map(item =>
            (
              <Col key={item.id} className='mt-5'>
                <ArtCard item={item}/>
              </Col>
            )
          )
        }
        </Row>
    </Container>
  );
}

function GridArt(props)
{
  <Container>
    {
      props.list.map((item) => (<ArtCard/>))
    }
  </Container>
}

export default App;
