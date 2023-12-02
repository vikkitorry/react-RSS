import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Pagination.module.scss';
import { Button, ButtonSize } from '../Button/Button';
import { MainPageRoutes } from '../../app/router/routeConfig/routeConfig';
import { useSearchParams } from 'react-router-dom';

interface IPaginationProps {
  page: number;
}

export const Pagination = (props: IPaginationProps) => {
  const { page } = props;
  const [, setSearchParams] = useSearchParams();

  const changePage = (switcher: number) => {
    setSearchParams((searchParams) => {
      searchParams.set(MainPageRoutes.PAGE, (page + switcher).toString());
      return searchParams;
    });
  };

  return (
    <div className={classNames(cls.Pagination, {}, [])}>
      <Button
        data-testid="prev-btn"
        className=""
        size={ButtonSize.M}
        onClick={() => page > 1 && changePage(-1)}
      >
        &#8701;
      </Button>
      <div>
        Page <span>{page}</span>
      </div>
      <Button
        data-testid="next-btn"
        className=""
        size={ButtonSize.M}
        onClick={() => changePage(1)}
      >
        &#8702;
      </Button>
    </div>
  );
};
