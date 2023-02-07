
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


function Header() {
  
  return(
    <Container as='header' fluid>
      <Row className='align-items-center'>
        <Col>Working App Name</Col>
        <Col>
          <Nav variant='pills'>
            {/* <Nav.Item>
              <Nav.Link as={Link} to={'/add/'}>
                Add
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link>
                Place Holder
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

export default Header;