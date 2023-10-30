import cls from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={cls.LoaderContainer}>
      <div className={cls.Loader}></div>
    </div>
  );
};
