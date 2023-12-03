import cls from './UserUnfo.module.scss';
import { IUserData } from '../../../store/reducers/DataSlice';
import { classNames } from '../../../utils/libs/classNames/classNames';

export enum UserInfoTheme {
  current = 'current',
  standart = 'standart',
}

interface IUserInfo {
  data: IUserData;
  theme: UserInfoTheme;
}

export const UserInfo = (props: IUserInfo) => {
  const { data, theme } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
  };

  return (
    <div className={classNames(cls.container, mods, [])}>
      <img src={data.picture} alt="image" />
      <p>
        Name:
        <span>{data.name}</span>
      </p>
      <p>
        Age:
        <span>{data.age}</span>
      </p>
      <p>
        Gender:
        <span>{data.gender}</span>
      </p>
      <p>
        Country:
        <span>{data.country}</span>
      </p>
      <p>
        Email:
        <span>{data.email}</span>
      </p>
      <p>
        Password:
        <span>{data.password}</span>
      </p>
    </div>
  );
};

export default UserInfo;
