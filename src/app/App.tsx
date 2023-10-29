import React, { Component, Suspense } from 'react';
import { classNames } from '../utils/libs/classNames/classNames';
import { MainPage } from '../pages/main/MainPage';

class App extends Component {
  render() {
    return (
      <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
          <div className="content">
            <MainPage />
          </div>
        </Suspense>
      </div>
    );
  }
}

export default App;
