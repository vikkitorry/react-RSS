import cls from './NoResultsPage.module.scss';

export const NoResultsPage = () => {
  return (
    <div className={cls.NoResultsPage}>
      <div className={cls.error}></div>
      <div>There is nothing</div>
    </div>
  );
};
