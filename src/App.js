// import React from 'react';
import './App.scss';
import PageHeader from './components/layouts/PageHeader';
import VidlyPage from './pages/VidlyPage';

function App() {
  return (
    <div className='App'>
      <PageHeader
        title='Modern Vidly'
        subTitle='Pagination + Filtering + Sorting'
      />
      <VidlyPage />
    </div>
  );
}

export default App;
