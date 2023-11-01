import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Pagination.module.scss';
import { Button, ButtonSize } from '../Button/Button';
import { useEffect, useState } from 'react';

interface PaginationProps {
  totalPages: number | undefined;
  getPage: (page: number) => void;
  setQueryParam: (page: string) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { totalPages, getPage, setQueryParam } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const prevPage = () => {
    if (currentPage > 1) {
      // setQueryParam((currentPage - 1).toString());
      console.log(setQueryParam);
      setCurrentPage(currentPage - 1);
      getPage(currentPage - 1);
    }
  };
  //есть баг с отображением страницы, если количество страниц одинаковое
  useEffect(() => {
    setCurrentPage(1);
  }, [totalPages]);

  const nextPage = () => {
    if (totalPages && currentPage < totalPages) {
      // setQueryParam((currentPage + 1).toString());
      setCurrentPage(currentPage + 1);
      getPage(currentPage + 1);
    }
  };

  return (
    <div className={classNames(cls.Pagination, {}, [])}>
      <Button className="" size={ButtonSize.M} onClick={prevPage}>
        &#8701;
      </Button>
      <div>
        Page <span>{currentPage}</span> / <span>{totalPages}</span>
      </div>
      <Button className="" size={ButtonSize.M} onClick={nextPage}>
        &#8702;
      </Button>
    </div>
  );
};
