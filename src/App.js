// import React from 'react';
import './App.scss';
import PageHeader from './components/layouts/PageHeader';
import VidlyPage from './pages/VidlyPage';

function App() {
  return (
    <div className='App'>
      <PageHeader
        title='Modern Vidly'
        subTitle='Powered by React Hooks & Compositions'
      />
      <VidlyPage />
    </div>
  );
}

export default App;
