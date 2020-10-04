import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PagePagination from './../component/PagePagination';
import PageCollapse from './../component/PageCollapse';
import PageButton from './../component/PageButton';

function Footer(){
	return(
		<>
		<PagePagination />
		<Container>
              <Row>
                <Col md={1} align="left"><PageButton /> </Col>
                <Col md={2}><PageCollapse /> </Col>
              </Row>
         </Container>  
		</>
		)
}

export default Footer;