import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={cls.NotFoundPage}>
      <div className={cls.errorContainer}>
        <div>4</div>
        <div className={cls.error}></div>
        <div>4</div>
      </div>
      <div>Oooooops...</div>
      <div>Page Not Found</div>
    </div>
  );
};

export default NotFoundPage;
