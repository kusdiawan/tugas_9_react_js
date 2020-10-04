import React from 'react';
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';

function PageBreadcrumb(){
	return(
		<>
         <Container>
          <Row>
               <Col md={{ span:4, offset:8 }}>
                      <Breadcrumb>
                          <Breadcrumb.Item href="#"> Home </Breadcrumb.Item>
                          <Breadcrumb.Item href="#"> Liga Inggris </Breadcrumb.Item>
                          <Breadcrumb.Item href="#" active> Transfer Pemain </Breadcrumb.Item>
                      </Breadcrumb>
                  </Col>
              </Row>
           </Container>
          </>
		)
}

export default PageBreadcrumb;