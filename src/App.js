import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VidlyPage from './pages/VidlyPage';
import './App.scss';
import MovieFormPage from './pages/MovieFormPage';
import SamplePage from './pages/SamplePage';
import NotFoundPage from './pages/NotFoundPage';
import FormikTest from './pages/FormikTest';
import MainNavbar from './components/common/MainNavBar';

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Switch>
        <Route exact path='/'>
          <VidlyPage />
        </Route>
        {/* THE ROUTER PARAMS WON'T PASS IF THE FOLLOWING WAY IS NOT DONE */}
        <Route exact path='/movies/:id' component={MovieFormPage}></Route>
        {/* THE PARAMS WON'T PASS THE FOLLOWING WAY */}
        <Route exact path='/formik-test'>
          <FormikTest />
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
