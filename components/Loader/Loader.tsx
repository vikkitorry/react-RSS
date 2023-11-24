import cls from './Loader.module.scss';
import { classNames } from '@/src/utils/libs/classNames/classNames';

export enum LoaderTheme {
  BACKGROUND_LIGHT = 'light-loader',
  BACKGROUND_DARK = 'dark-loader',
}

interface ILoader {
  color: LoaderTheme;
}

export const Loader = (props: ILoader) => {
  const { color } = props;
  return (
    <div
      className={classNames(cls.LoaderContainer, { [cls[color]]: true }, [])}
      data-testid={'loader'}
    >
      <div className={cls.Loader}></div>
    </div>
  );
};
