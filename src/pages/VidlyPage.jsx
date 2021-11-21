import React, { useState, useEffect } from 'react';
import Page from '../components/layouts/Page';
import Like from '../components/common/Like';
import Content from '../components/layouts/Content';
import { Row, Col, Table, Button } from 'react-bootstrap';
import MoviePagination from '../components/common/MoviePagination';
import doPagination from '../utils/doPagination';
import FilterNav from '../components/common/FilterNav';
import { getMovies } from '../data/fakeMovieData';
import { getGenres } from '../data/fakeGenreData';
import './VidlyPage.scss';

function VidlyPage() {
  const [movies, setMovies] = useState([]);
  const [genres, setGeneres] = useState([]);
  const [itemsPerPage, setitemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const movies = getMovies();
    setMovies(movies);
    const genres = [{ id: '', name: 'All' }, ...getGenres()];
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  // FILTERING HERE ...
  const filteredMovies =
    selectedGenre && selectedGenre._id
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;

  // PAGINATION HERE ...
  const pagedMovies = doPagination(filteredMovies, currentPage, itemsPerPage);

  // MOVIE COUNT & LIKE COUNTS
  const count = filteredMovies.length;
  const likeCount = movies.filter((m) => m.like === true).length;

  if (count === 0)
    return (
      <h4 className='mt-5 text-center text-danger'>
        There is no Movies in the Database...
      </h4>
    );

  return (
    <Page wide={true} pageTitle='Modern Vidly'>
      <div className='text-right'>
        <h4>
          <span className='badge badge-secondary'>
            Now showing {count} movies...
          </span>{' '}
          <span className='badge badge-primary'>Total Liked: {likeCount}</span>
        </h4>
      </div>
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
          <Content width='w-100' cssClassNames='bg-light p-1'>
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
                {/* {movies.map((movie) => ( */}
                {pagedMovies.map((movie) => (
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
                      <Button
                        onClick={() => handleDelete(movie._id)}
                        variant='danger'
                        size='sm'
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <MoviePagination
              itemsCount={count}
              pageSize={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default VidlyPage;
