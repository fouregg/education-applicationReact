import './App.css';
import ArtCard from './components/ArtCard/ArtCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState, useRef } from 'react';


const base_url = "https://api.artic.edu/api/v1";
const limit = 100;

function App() {
  const defaultJson = useRef([]);
  const [massArt, setArt] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const setDefaultJson = (value) => {
    defaultJson.current = value;
  }
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
      {
        fetchData();
        setDefaultJson(massArt);
      }
  });

  return (
    <>
      <Navbar expand="lg" className="navbar-dark bg-dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="px-5" onClick={() => setArt(defaultJson.current.filter(item => item.artwork_type_title === "Painting"))}>Paintng</Nav.Link>
              <Nav.Link className="px-5" onClick={() => setArt(defaultJson.current.filter(item => item.artwork_type_title === "Photograph"))}>Photograph</Nav.Link>
              <Nav.Link className="px-5" onClick={() => setArt(defaultJson.current.filter(item => item.artwork_type_title === "Icon"))}>Icon</Nav.Link>
              <Nav.Link className="px-5" onClick={() => setArt(defaultJson.current.filter(item => item.artwork_type_title === "Textile"))}>Textile</Nav.Link>
              <Nav.Link className="px-5" onClick={() => setArt(defaultJson.current.filter(item => item.artwork_type_title === "Furniture"))}>Furniture</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
    </>
  );
}

export default App;
