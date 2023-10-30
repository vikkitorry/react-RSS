import cls from './NoResultsPage.module.scss';

export const NoResultsPage = () => {
  return (
    <div className={cls.NoResultsPage}>
      <div className={cls.error}></div>
      <div>There is no character with such name</div>
    </div>
  );
};
