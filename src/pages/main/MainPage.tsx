import cls from './mainPage.module.scss';
import UserInfo from '../../components/widgets/UserInfo/UserInfo';
import { useAppSelector } from '../../store/hooks/redux';
import { UserInfoTheme } from '../../components/widgets/UserInfo/UserInfo';

export const MainPage = () => {
  const { data } = useAppSelector((state) => state.dataReducer);
  const { uncontrolledData } = useAppSelector(
    (state) => state.uncontrolledDataReducer
  );
  return (
    <div className={cls.MainPage}>
      {uncontrolledData.length && (
        <div className={cls.dataContainer}>
          Uncontrolled
          {uncontrolledData.map((userData, i) => (
            <UserInfo
              data={userData}
              key={userData.name + i}
              theme={
                i === uncontrolledData.length - 1
                  ? UserInfoTheme.current
                  : UserInfoTheme.standart
              }
            />
          ))}
        </div>
      )}
      {data.length && (
        <div className={cls.dataContainer}>
          Controlled
          {data.map((userData, i) => (
            <UserInfo
              data={userData}
              key={userData.name + i}
              theme={
                i === data.length - 1
                  ? UserInfoTheme.current
                  : UserInfoTheme.standart
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
