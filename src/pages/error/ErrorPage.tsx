import cls from './ErrorPage.module.scss';

export const ErrorPage = () => {
  return (
    <div className={cls.ErrorPage}>
      <p>Oooops... Error</p>
      <p>You should reload page</p>
    </div>
  );
};
