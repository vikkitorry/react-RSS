import cls from './UserUnfo.module.scss';
import { IUserData } from '../../../store/reducers/DataSlice';

interface IUserInfo {
  data: IUserData;
}

export const UserInfo = (props: IUserInfo) => {
  return (
    <div className={cls.container}>
      <p>{props.data.name}</p>
      <p>{props.data.age}</p>
      <p>{props.data.gender}</p>
      <p>{props.data.country}</p>
      <p>{props.data.email}</p>
      <p>{props.data.password}</p>
    </div>
  );
};

export default UserInfo;
