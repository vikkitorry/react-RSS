import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Pagination.module.scss';
import { Button, ButtonSize } from '../Button/Button';
import { useState } from 'react';

interface PaginationProps {
  totalPages: number | undefined;
}

export const Pagination = (props: PaginationProps) => {
  const { totalPages } = props;
  const [page, setPage] = useState<number>(1);

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (totalPages && page < totalPages) {
      setPage(page + 1);
    }
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
