import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

function MenuAdd() {
  const [menuFormData, setMenuFormData] = useState({ name: "", price: "", description: "" });
  
  // set state for form validation
  const [validated] = useState(false);

  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMenuFormData({ ...menuFormData, [name]: value });
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
      const resp = await axios.post('/api/menus/', menuFormData, {header:{"Content-type": "application/json"}});
      console.log(resp)

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


  return(
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
    <Form.Group className='mb-3' controlId=''>
      <Form.Label>name</Form.Label>
      <Form.Control name='name' value={menuFormData.name} onChange={handleChange} type='text' placeholder='Enter name'/>
    </Form.Group>
    <Form.Group className='mb-3'>
      <Form.Label>price</Form.Label>
      <Form.Control name='price' value={menuFormData.price} onChange={handleChange} type='price' placeholder='Enter price'/>
    </Form.Group>
    <Form.Group className='mb-3'>
      <Form.Label>description</Form.Label>
      <Form.Control name='description' value={menuFormData.description} onChange={handleChange} type='text' placeholder='Enter description'/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default MenuAdd;