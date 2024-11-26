import './App.css';
import ArtCard from './components/ArtCard/ArtCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState, useRef, act } from 'react';


const base_url = "https://api.artic.edu/api/v1";
const limit = 20;
let activePage = 1;
function App() {

  const defaultJson = useRef([]);
  const [showPage, setShowPage] = useState(1);
  const [massArt, setArt] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(2);

  async function setDefaultJson (value) {
    defaultJson.current = value;
  }

  const fetchData = async() =>
    {
      try{
        let jsonData = await fetch(`${base_url}/artworks?page=${activePage}&limit=${limit}`).then(responce => responce.json());
        setArt(jsonData.data);
        if (lastPage === 2)
          setLastPage(jsonData.pagination.total_pages);
        return jsonData.data;
      }
      catch(error)
      {
        console.log("Problem to fetch data from API!");
      }
    }
      

  async function nextPage()
  {
    activePage++;
    setShowPage(prevPage => prevPage + 1);
    setDefaultJson(await fetchData());
  }

  async function prevPage()
  {
    activePage--;
    setShowPage(prevPage => prevPage - 1);
    setDefaultJson(await fetchData());
  }
  
  async function getCurrectPage(num_page)
  {
    activePage = num_page;
    setShowPage(num_page);
    setDefaultJson(await fetchData());
  }

  useEffect(() => {
    if(massArt.length !== 0)
    {
      if(!isLoading)
        setDefaultJson(massArt);
      setLoading(true);
    } 
    if(!isLoading)
    {
      fetchData();
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
              <Nav.Link className="px-5" onClick={() => setArt(defaultJson.current)}>All</Nav.Link>
              <Nav.Link className="px-5" onClick={() => setArt(defaultJson.current.filter(item => item.artwork_type_title === "Painting"))}>Paintng</Nav.Link>
              <Nav.Link className="px-5" onClick={() => setArt(defaultJson.current.filter(item => item.artwork_type_title === "Photograph"))}>Photograph</Nav.Link>
              <Nav.Link className="px-5" onClick={() => setArt(defaultJson.current.filter(item => item.artwork_type_title === "Icon"))}>Icon</Nav.Link>
              <Nav.Link className="px-5" onClick={() => setArt(defaultJson.current.filter(item => item.artwork_type_title === "Textile"))}>Textile</Nav.Link>
              <Nav.Link className="px-5" onClick={() => setArt(defaultJson.current.filter(item => item.artwork_type_title === "Furniture"))}>Furniture</Nav.Link>
            </Nav>
            <div className='d-flex' style={{  width: '18rem'}}>
                  <Form.Control onChange={(event) => setArt(defaultJson.current.filter(item => item.artist_title != null ? item.artist_title.toLowerCase().includes(event.target.value.toLowerCase()):""))}
                    type="text"
                    placeholder="Искать автора"
                    className=" mr-sm-2"
                  ></Form.Control>
            </div>
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
          <div className="d-flex justify-content-center">
            <Pagination className="mt-5" size="lg">
              <Pagination.First onClick={() => getCurrectPage(1) } />
              <Pagination.Prev onClick={() => prevPage() }/>
              { showPage > 2 ? <Pagination.Ellipsis disabled /> : ""}
              { showPage > 1 ? <Pagination.Item onClick={() => getCurrectPage(showPage - 1)}>{showPage - 1}</Pagination.Item> : ""}
              <Pagination.Item active>{showPage}</Pagination.Item>
              { showPage < lastPage ? <Pagination.Item onClick={() => getCurrectPage(showPage + 1)}>{showPage + 1}</Pagination.Item> : ""}
              { showPage < lastPage - 1 ? <Pagination.Ellipsis disabled /> : ""}
              <Pagination.Next onClick={() => nextPage() }/>
              <Pagination.Last onClick={() => getCurrectPage(lastPage)}/>
            </Pagination>
          </div>
      </Container>
    </>
  );
}

export default App;
