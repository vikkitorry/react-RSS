import { classNames } from '@/src/utils/libs/classNames/classNames';
import cls from './Pagination.module.scss';
import { Button, ButtonSize } from '../Button/Button';
import { useRouter } from 'next/router';

export const Pagination = () => {
  const router = useRouter();

  const { query, limit, page } = router.query;

  const changePage = (switcher: number) => {
    if (page) {
      router.push({
        query: { query, page: Number(page) + switcher, limit },
      });
    }
  };

  return (
    <div className={classNames(cls.Pagination, {}, [])}>
      <Button
        data-testid="prev-btn"
        className=""
        size={ButtonSize.M}
        onClick={() => page && Number(page) > 1 && changePage(-1)}
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
