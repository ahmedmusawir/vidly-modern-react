import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';
import Like from '../components/common/Like';
import { getMovies } from '../data/fakeMovieData';
import { getGenres } from '../data/fakeGenreData';
// import movieData from '../data/testMovieData';
import FilterNav from '../components/common/FilterNav';
import './VidlyPage.scss';

function VidlyPage() {
  const [movies, setMovies] = useState([]);
  const [genres, setGeneres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

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

  const handleGenreSelect = (genre) => {
    // console.log(genre.name);
    setSelectedGenre(genre);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((m) => m.genre._id === selectedGenre._id)
    : movies;

  // const allMovies = selectedGenre === {} ? movies : filteredMovies;
  // console.log('selected: ', selectedGenre);
  // console.log('all movies: ', movies);
  // console.log('filtered', filteredMovies);

  return (
    <Page wide={true} pageTitle='Modern Vidly'>
      <Row className='justify-content-center'>
        <Col sm={2}>
          <Content width='w-100' cssClassNames='bg-light'>
            <FilterNav
              data={genres}
              selectedItem={selectedGenre}
              onItemSelect={handleGenreSelect}
            />
          </Content>
        </Col>
        <Col sm={10}>
          <Content width='w-100' cssClassNames='bg-light p-3'>
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
                {filteredMovies.map((movie) => (
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
