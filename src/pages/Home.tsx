
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from './components/Header';
import MenuAdd from './components/MenuAdd';

function Home() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
            <MenuAdd as={Col}/>
            <MenuGet as={Col}/>
        </Row>
      </Container>
    </>
  );
}

export default Home;