import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';
import Like from '../components/common/Like';
import { getMovies } from '../data/fakeMovieData';
import { getGenres } from '../data/fakeGenreData';
import './VidlyPage.scss';
import SearchBox from '../components/common/SearchBox';

function VidlyPage() {
  const [movies, setMovies] = useState([]);
  const [generes, setGeneres] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const searchMovies = movies.filter(
    (m) => m.title.toLowerCase().includes(searchQuery.toLowerCase())
    // m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

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
            <SearchBox value={searchQuery} onChange={handleSearch} />
            <Table responsive hover striped bordered variant='dark' size='sm'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {searchMovies.map((movie) => (
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
