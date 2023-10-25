import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './ErrorPage.module.scss';

export const ErrorPage = () => {
  return (
    <div className={classNames(cls.ErrorPage, {}, [])}>
      <p>Oooops... Error</p>
    </div>
  );
};
