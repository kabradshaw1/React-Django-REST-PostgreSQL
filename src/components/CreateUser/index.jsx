import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';

const CreateUser = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });

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
      const resp = await axios.post('/api/users/', userFormData);
      console.log(resp.data)

    } catch(err) {
      console.error(err)
      setShowAlert(true);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    
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
      <Form.Label><h3>Sign Up Form</h3></Form.Label>
      <Form.Group className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' value={userFormData.email} onChange={handleInputChange} type='text' placeholder='Enter email'/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' value={userFormData.password} onChange={handleInputChange} type='password' placeholder='Enter password'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default CreateUser;