import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

function MenuGet() {
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

  return(
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
  )
};

export default MenuGet