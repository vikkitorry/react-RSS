import cls from './CardSkeleton.module.scss';

export const CardSkeleton = () => {
  return (
    <div className={cls.CardSkeleton}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
