import { RouteProps } from 'react-router-dom';
import { Form1 } from '../../../pages/form1/Form1';
import { Form2 } from '../../../pages/form2/Form2';
import NotFoundPage from '../../../pages/notFound/NotFoundPage';
import MainPage from '../../../pages/main/MainPage';

export enum AppRoutes {
  MAIN = 'main',
  FORM_ONE = 'form_one',
  FORM_TWO = 'form_two',
  NOT_FOUND = 'not_found',
}

export enum MainPageRoutes {
  MAIN = 'main',
  PAGE = 'page',
  SHOW = 'show',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.FORM_ONE]: '/form_one',
  [AppRoutes.FORM_TWO]: '/form_two',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.FORM_ONE]: {
    path: RoutePath.form_one,
    element: <Form1 />,
  },
  [AppRoutes.FORM_TWO]: {
    path: RoutePath.form_two,
    element: <Form2 />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
