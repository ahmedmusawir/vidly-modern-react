import React, { useState, useEffect } from 'react';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';
import { Row, Col } from 'react-bootstrap';
import doPagination from '../utils/doPagination';
import MovieTable from '../components/MovieTable';
import FilterNav from '../components/common/FilterNav';
import PaginationAction from '../components/common/PaginationAction';
import { getMovies } from '../data/fakeMovieData';
import { getGenres } from '../data/fakeGenreData';
import _ from 'lodash';
import './VidlyPage.scss';
import SearchBox from '../components/common/SearchBox';

function VidlyPage() {
  const [movies, setMovies] = useState([]);
  const [genres, setGeneres] = useState([]);
  const [itemsPerPage, setitemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState({
    path: 'title',
    order: 'asc',
  });

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
    setSearchQuery('');
  };

  const handleSort = () => {
    setSortColumn({ ...sortColumn, order: sortColumn.order });
  };

  const handleSearch = (query) => {
    setCurrentPage(1);
    setSearchQuery(query);
  };

  // INITIALIZING MOVIES
  let filteredMovies = movies;

  // FILTERING & SEARCH HERE ...
  if (searchQuery) {
    filteredMovies = movies.filter((m) =>
      m.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (selectedGenre && selectedGenre._id) {
    filteredMovies = movies.filter((m) => m.genre._id === selectedGenre._id);
  }

  // SORTING HERE ...
  const sortedMovies = _.orderBy(
    filteredMovies,
    [sortColumn.path],
    [sortColumn.order]
  );

  // PAGINATION HERE ...
  const pagedMovies = doPagination(sortedMovies, currentPage, itemsPerPage);

  // MOVIE COUNT & LIKE COUNTS
  const count = filteredMovies.length;
  const likeCount = movies.filter((m) => m.like === true).length;

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
        <Col md={2}>
          <Content width='w-100' cssClassNames='bg-light'>
            <FilterNav
              data={genres}
              selectedItem={selectedGenre}
              onItemSelect={handleGenreSelect}
            />
          </Content>
        </Col>
        <Col md={10}>
          <Content width='w-100' cssClassNames='bg-light p-1'>
            <SearchBox value={searchQuery} onChange={handleSearch} />
            <MovieTable
              movies={pagedMovies}
              sortColumn={sortColumn}
              onSort={handleSort}
              onLike={handleLike}
              onDelete={handleDelete}
            />
            <PaginationAction
              itemsCount={count}
              pageSize={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            {count === 0 ? (
              <h4 className='my-5 text-center text-danger'>
                There is no Movies in the Database...
              </h4>
            ) : null}
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default VidlyPage;
