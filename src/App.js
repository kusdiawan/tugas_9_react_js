import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Page/Header';
import Content from './Page/Content';
import Footer from './Page/Footer';

function App() {
  return (
    <div className="App">
    <Container>
        <Row>
            <Col md={12}><Header /></Col>
        </Row>

        <Row>
            <Col md={12}><Content /></Col>
        </Row>

        <Row>
            <Col md={12}><Footer /></Col>
        </Row>
    </Container>
    </div>
  );
}

export default App;
