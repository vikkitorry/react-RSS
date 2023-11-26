import cls from '@/src/styles/Home.module.css';
import CardsHandler from '../../components/CardsHandler/CardsHandler';
import { CardsHandlerSize } from '../../components/CardsHandler/CardsHandler';
import { useSearchParams } from 'next/navigation';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { DetailedShowSchema, ShowSchema } from '../services/types/serviceTypes';
import { DetailedCard } from '@/components/Card/Detailed/Detailed';
import { useRouter } from 'next/router';
import { wrapper } from '../store/store';
import { service } from '../services/service';

export const enum MainPageRoutes {
  show = 'show',
  page = 'page',
  query = 'query',
  limit = 'limit',
}

type MainPageProps = {
  data: {
    allShowsData: ShowSchema[] | null;
    showData: DetailedShowSchema | null;
  };
};

export const getServerSideProps: GetServerSideProps<MainPageProps> =
  wrapper.getServerSideProps((store) => async (context) => {
    const { query, page, limit, show } = context.query;

    store.dispatch(
      service.endpoints.getPageData.initiate({
        query: query || '',
        page: Number(page) || 1,
        limit: Number(limit) || 30,
      })
    );

    store.dispatch(
      service.endpoints.getShow.initiate({
        show: Number(show) || null,
      })
    );

    await Promise.all(store.dispatch(service.util.getRunningQueriesThunk()));

    return {
      props: {
        data: {
          allShowsData: store.getState().showsReducer.allShows,
          showData: store.getState().showsReducer.show,
        },
      },
    };
  });

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { allShowsData, showData } = data;
  const searchParams = useSearchParams();
  const router = useRouter();
  const isShowOpen = searchParams.get(MainPageRoutes.show);

  const closeDetailed = () => {
    if (isShowOpen) {
      const { pathname, query } = router;
      delete query.show;
      const updatedUrl = { pathname, query };
      router.replace(updatedUrl);
    }
  };

  return (
    <div className={cls.MainPage} data-testid={'mainPage'}>
      <CardsHandler
        dataCards={allShowsData}
        onClick={closeDetailed}
        data-testid={'cardsHandler'}
        size={isShowOpen ? CardsHandlerSize.LEFT : CardsHandlerSize.FULL}
      />
      {isShowOpen && <DetailedCard data={showData} />}
    </div>
  );
};

export default Home;
