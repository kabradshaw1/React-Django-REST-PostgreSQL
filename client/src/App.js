import axios from 'axios'
import Container from 'react-bootstrap/Container';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';



function App() {
  const [menuFormData, setMenuFormData] = useState({ name: "", price: "", description: "" });

  const [menuGetData, setMenuGetData] = useState([]);
  // set state for form validation
  const [validated] = useState(false);

  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setMenuFormData({ ...menuFormData, [name]: value });
  };

  const handlePriceChange = (event) => {
    const { price, value } = event.target;
    setMenuFormData({ ...menuFormData, [price]: value });
  };

  const handleDescriptionChange = (event) => {
    const { description, value } = event.target;
    setMenuFormData({ ...menuFormData, [description]: value });
  };
  
  const handlePostSubmit = async (event) => {
    event.preventDefault();
    console.log(menuFormData)
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    try {
      const resp = await axios.post('/api/menus/', menuFormData);
      console.log(resp.data)

    } catch(err) {
      console.error(err)
      setShowAlert(true);
    }

    setMenuFormData({
      name: "",
      price: "",
      description: ""
    });
  };

  const handleGetSubmit = async (event) => {
    event.preventDefault()

    try{
      const resp = await axios.get('/api/menus/');
      setMenuGetData(resp)

    }catch(err) {
      console.error(err)
    }

  }

  return (
    <Container>
      <Row>
        <Col>
          <Form noValidate validated={validated} className='bg-secondary' onSubmit={handlePostSubmit}>
            {/* show alert if server response is bad */}
            <Alert
                dismissible
                onClose={() => setShowAlert(false)}
                show={showAlert}
                variant="danger"
                >
                Something went wrong with your signup!
              </Alert>
            <Form.Label><h3>Menu Form</h3></Form.Label>
            <Form.Group className='mb-3'>
              <Form.Label>name</Form.Label>
              <Form.Control name='name' value={menuFormData.name} onChange={handleNameChange} type='text' placeholder='Enter name'/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>price</Form.Label>
              <Form.Control name='price' value={menuFormData.price} onChange={handlePriceChange} type='price' placeholder='Enter price'/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>description</Form.Label>
              <Form.Control name='description' value={menuFormData.description} onChange={handleDescriptionChange} type='description' placeholder='Enter description'/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          <Card className='bg-secondary'>
            <Card.Title><h3>Menu List</h3></Card.Title>
            <Card.Subtitle>name</Card.Subtitle>
            {menuGetData.map((menu) =>{
              <Card className='bg-primary'>
                <Card.Text>{menu.name}</Card.Text>
                <Card.Text>{menu.description}</Card.Text>
                <Card.Text>{menu.price}</Card.Text>
              </Card>
            })}
            <Card.Text>Stuff</Card.Text>
            <Button variant="primary" onClick={handleGetSubmit}>Get</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
