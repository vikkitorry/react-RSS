import cls from './Loader.module.scss';
import { classNames } from '../../../utils/libs/classNames/classNames';

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
    >
      <div className={cls.Loader}></div>
    </div>
  );
};
