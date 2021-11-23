import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageHeader from './components/layouts/PageHeader';
import VidlyPage from './pages/VidlyPage';
import './App.scss';
import MovieFormPage from './pages/MovieFormPage';
import SamplePage from './pages/SamplePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <PageHeader
        title='Modern Vidly'
        subTitle='Pagination + Filtering + Sorting + Searching'
      />
      <Switch>
        <Route exact path='/'>
          <VidlyPage />
        </Route>
        <Route exact path='/movies/:id'>
          <MovieFormPage />
        </Route>
        <Route exact path='/sample-page'>
          <SamplePage />
        </Route>
        <Route exact path='/*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
