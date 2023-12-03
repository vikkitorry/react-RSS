import cls from './mainPage.module.scss';
import UserInfo from '../../components/widgets/UserInfo/UserInfo';
import { useAppSelector } from '../../store/hooks/redux';
import { UserInfoTheme } from '../../components/widgets/UserInfo/UserInfo';

export const MainPage = () => {
  const { data } = useAppSelector((state) => state.dataReducer);

  return (
    <div className={cls.MainPage}>
      {data.length ? (
        <div className={cls.dataContainer}>
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
      ) : (
        <p>{'No cards =('}</p>
      )}
    </div>
  );
};

export default MainPage;
