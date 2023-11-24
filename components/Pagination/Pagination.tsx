import { classNames } from '@/src/utils/libs/classNames/classNames';
import cls from './Pagination.module.scss';
import { Button, ButtonSize } from '../Button/Button';
import { MainPageRoutes } from '@/src/pages';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

interface IPaginationProps {
  page: number;
  createQueryString: (name: string, value: string) => void
}

export const Pagination = (props: IPaginationProps) => {
  const { page, createQueryString } = props;
  const router = useRouter()
  const pathname = usePathname()

  const changePage = (switcher: number) => {
    router.push(pathname + '?' + createQueryString(MainPageRoutes.page, `${page + switcher}`))
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