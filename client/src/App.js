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
  const [userFormData, setUserFormData] = useState({ name: "", price: "", description: "" });

  // set state for form validation
  const [validated] = useState(false);

  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData)
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    try {
      const resp = await axios.post('/api/menus/', userFormData);
      console.log(resp.data)

    } catch(err) {
      console.error(err)
      setShowAlert(true);
    }

    setUserFormData({
      name: "",
      price: "",
      description: ""
    });
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form noValidate validated={validated} className='bg-secondary' onSubmit={handleSubmit}>
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
              <Form.Control name='name' value={userFormData.name} onChange={handleInputChange} type='text' placeholder='Enter name'/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>price</Form.Label>
              <Form.Control name='price' value={userFormData.price} onChange={handleInputChange} type='price' placeholder='Enter price'/>
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
            {/* {menus && 
              menus.map(menu => (
                <>
                  <Card.Text key={menu._id} className='mb-3'>{menu.name}</Card.Text>
                  <Card.Text className='mb-3'>{menu.price}</Card.Text>
                </>
                
              ))
            } */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
