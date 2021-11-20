import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';
import Like from '../components/common/Like';
import { getMovies } from '../data/fakeMovieData';
import { getGenres } from '../data/fakeGenreData';
import { BsArrowBarUp, BsArrowBarDown } from 'react-icons/bs';
import _ from 'lodash';
import './VidlyPage.scss';

function VidlyPage() {
  const [movies, setMovies] = useState([]);
  const [generes, setGeneres] = useState([]);
  const [sortColumn, setSortColumn] = useState({ path: 'title', order: 'asc' });

  useEffect(() => {
    const movies = getMovies();
    setMovies(movies);
    const genres = getGenres();
    setGeneres(genres);
  }, []);

  const handleLike = (movieId) => {
    setMovies(
      movies.map((movie) =>
        movie._id === movieId ? { ...movie, like: !movie.like } : movie
      )
    );
  };

  const handleDelete = (movieId) => {
    const delMovies = movies.filter((movie) => movie._id !== movieId);
    setMovies(delMovies);
  };

  const handleSort = (path) => {
    // console.log(path);

    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    setSortColumn({ ...sortColumn, order: sortColumn.order });
    // console.log(sortColumn);
  };

  const sortedMovies = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
  // console.log(sortedMovies);

  return (
    <Page wide={true} pageTitle='Modern Vidly'>
      <Row className='justify-content-center'>
        <Col sm={2}>
          <Content width='w-100' cssClassNames='bg-light'>
            <p>It's All About The Count...</p>
          </Content>
        </Col>
        <Col sm={10}>
          <Content width='w-100' cssClassNames='bg-light'>
            <Table responsive hover striped bordered variant='dark' size='sm'>
              <thead>
                <tr>
                  <th onClick={() => handleSort('title')}>Title </th>
                  <th onClick={() => handleSort('genre.name')}>Genre </th>
                  <th onClick={() => handleSort('numberInStock')}>Stock </th>
                  <th onClick={() => handleSort('dailyRentalRate')}>Rate </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {sortedMovies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        like={movie.like}
                        onLike={() => handleLike(movie._id)}
                      />
                    </td>
                    <td>
                      <Button onClick={() => handleDelete(movie._id)}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default VidlyPage;
