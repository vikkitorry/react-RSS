import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainOutlet, Main, routeConfig } from './routeConfig/routeConfig';

const AppRouter = () => (
  <Routes>
    <Route
      key={Main.path}
      path={Main.path}
      element={
        <Suspense fallback="">
          <div className="page-wrapper">{Main.element}</div>
        </Suspense>
      }
    >
      <Route
        key={MainOutlet.path}
        path={MainOutlet.path}
        element={MainOutlet.element}
      ></Route>
    </Route>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback="">
            <div className="page-wrapper">{element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRouter;
