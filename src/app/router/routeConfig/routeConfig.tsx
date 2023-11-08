import { RouteProps } from 'react-router-dom';
import { MainPage } from '../../../pages/main/MainPage';
import { AboutPage } from '../../../pages/about/AboutPage';
import NotFoundPage from '../../../pages/notFound/NotFoundPage';
import { DetailedCard } from '../../../components/Card/Detailed/Detailed';

export enum AppRoutes {
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export enum MainPageRoutes {
  PAGE = 'page',
  SHOW = 'show',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};

//added it according to the task, then I’ll remove it (I can use size mods for cardHandler(with prop: cardID) without Outlet)

export const Main = {
  path: '/',
  element: <MainPage />,
};

export const MainOutlet = {
  path: '',
  element: <DetailedCard />,
};
