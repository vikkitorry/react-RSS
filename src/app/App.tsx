// import { Navbar } from '../components/widgets/Navbar/Navbar';
import React, { Component, Suspense } from 'react';
// import AppRouter from './providers/router/AppRouter';
import { classNames } from '../utils/libs/classNames/classNames';
import { MainPage } from '../pages/main/MainPage';

class App extends Component {
  render() {
    return (
      <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
          {/* <Navbar /> */}
          <div className="content">
            {/* <AppRouter /> */}
            <MainPage />
          </div>
        </Suspense>
      </div>
    );
  }
}

export default App;
