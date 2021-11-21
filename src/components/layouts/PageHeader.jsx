import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Content from './Content';

function PageHeader({ title, subTitle }) {
  return (
    <Row className='justify-content-center'>
      <Col sm={12}>
        <Content width='w-100' cssClassNames='bg-secondary p-2'>
          <h3>{title}</h3>
          <h6>{subTitle}</h6>
        </Content>
      </Col>
    </Row>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default PageHeader;
