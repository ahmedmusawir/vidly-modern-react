import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import MovieForm from '../components/MovieForm';
import PageHeader from '../components/layouts/PageHeader';

function MovieFormPage(props) {
  // console.log('Match ', match);
  console.log('Props ', props);
  return (
    <Page wide={true} pageTitle='Movie Form'>
      <PageHeader title='Movie From Page' subTitle='Adding new movies' />
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light'>
            <h5>Movie ID:{props.match.params.id}</h5>
            <MovieForm />
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default MovieFormPage;
