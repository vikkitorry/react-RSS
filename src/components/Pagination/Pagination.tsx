import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Pagination.module.scss';
import { Button, ButtonSize } from '../Button/Button';
import { SetURLSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../app/providers/router/routeConfig/routeConfig';

interface IPaginationProps {
  page: number;
  setSearchParams: SetURLSearchParams;
}

export const Pagination = (props: IPaginationProps) => {
  const { page, setSearchParams } = props;

  const changePage = (switcher: number) => {
    setSearchParams((searchParams) => {
      searchParams.set(MainPageRoutes.PAGE, (page + switcher).toString());
      return searchParams;
    });
  };

  return (
    <div className={classNames(cls.Pagination, {}, [])}>
      <Button
        className=""
        size={ButtonSize.M}
        onClick={() => page > 1 && changePage(-1)}
      >
        &#8701;
      </Button>
      <div>
        Page <span>{page}</span>
      </div>
      <Button className="" size={ButtonSize.M} onClick={() => changePage(1)}>
        &#8702;
      </Button>
    </div>
  );
};
