import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';

function NotFoundPage() {
  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light p-3'>
            <h1 className='text-center text-danger'>404 : Page Not Found...</h1>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default NotFoundPage;
