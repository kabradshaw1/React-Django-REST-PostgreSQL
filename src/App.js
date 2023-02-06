import axios from 'axios'
import Container from 'react-bootstrap/Container';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Header from './components/Header';
import MenuAdd from './components/MenuAdd'


function App() {
 
  const [menuGetData, setMenuGetData] = useState([]);

  const handleGetSubmit = async (event) => {
    event.preventDefault()

    try{
      const resp = await axios.get('/api/menu/', {header:{"Content-type": "application/json"}});
      setMenuGetData(resp.data)

    }catch(err) {
      console.error(err)
    }

  }

  return (
    <>
    <Header/>
    <Container>
      <Row>
        <Col>
          <MenuAdd/>
         
        </Col>
        <Col>
          <Card className='bg-secondary'>
            <Card.Title><h3>Menu List</h3></Card.Title>
            <Card.Subtitle>name</Card.Subtitle>
            {menuGetData && menuGetData.map((menu, index) => (
              <Card className='bg-primary' key={menu.id}>
                <Card.Text>{menu.name}</Card.Text>
                <Card.Text>{menu.description}</Card.Text>
                <Card.Text>{menu.price}</Card.Text>
              </Card>
            ))}
            <Card.Text>Stuff</Card.Text>
            <Button variant="primary" onClick={handleGetSubmit}>Get</Button>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
