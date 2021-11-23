import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';

function FormikTest() {
  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light'>
            <h1>Formik Test Page</h1>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default FormikTest;
