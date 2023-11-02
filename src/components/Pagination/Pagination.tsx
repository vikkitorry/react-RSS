import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Pagination.module.scss';
import { Button, ButtonSize } from '../Button/Button';
import { SetURLSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../app/providers/router/routeConfig/routeConfig';

interface PaginationProps {
  totalPages: number | undefined;
  page: number;
  setSearchParams: SetURLSearchParams;
}

export const Pagination = (props: PaginationProps) => {
  const { totalPages, page, setSearchParams } = props;

  const prevPage = () => {
    if (page > 1) {
      setSearchParams((searchParams) => {
        searchParams.set(MainPageRoutes.PAGE, (page - 1).toString());
        return searchParams;
      });
    }
  };

  const nextPage = () => {
    setSearchParams((searchParams) => {
      searchParams.set(MainPageRoutes.PAGE, (page + 1).toString());
      return searchParams;
    });
  };

  return (
    <div className={classNames(cls.Pagination, {}, [])}>
      <Button className="" size={ButtonSize.M} onClick={prevPage}>
        &#8701;
      </Button>
      <div>
        Page <span>{page}</span> / <span>{totalPages}</span>
      </div>
      <Button className="" size={ButtonSize.M} onClick={nextPage}>
        &#8702;
      </Button>
    </div>
  );
};
