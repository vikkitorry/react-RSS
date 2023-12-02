import { Navbar } from '../components/widgets/Navbar/Navbar';
import React, { Suspense } from 'react';
import AppRouter from './router/AppRouter';
import { classNames } from '../utils/libs/classNames/classNames';

function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
