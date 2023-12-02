import cls from './mainPage.module.scss';
import UserInfo from '../../components/widgets/UserInfo/UserInfo';
import { useAppSelector } from '../../store/hooks/redux';

export const MainPage = () => {
  const { data } = useAppSelector((state) => state.dataReducer);
  return (
    <div className={cls.MainPage}>
      <div>
        Main Page
        {data.map((userData) => (
          <UserInfo data={userData} key={userData.name} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
