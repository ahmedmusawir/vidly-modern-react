import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';

function MovieFormPage(props) {
  // console.log('Match ', match);
  console.log('Props ', props);
  return (
    <>
      <h1>Movie Form Page</h1>
      <h4>{props.match.params.id}</h4>
    </>
  );
}

export default MovieFormPage;
