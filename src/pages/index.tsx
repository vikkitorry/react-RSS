import cls from '@/src/styles/Home.module.css';
import CardsHandler from '../../components/CardsHandler/CardsHandler';
import { CardsHandlerSize } from '../../components/CardsHandler/CardsHandler';
import { useSearchParams } from 'next/navigation'
import { fetchAllShowsData } from '../services/getShows';
import { fetchShowData } from '../services/getShow';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { DetailedShowSchema, ShowSchema } from '../services/types/serviceTypes';
import { DetailedCard } from '@/components/Card/Detailed/Detailed';
import { useRouter } from 'next/router';

export const enum MainPageRoutes {
  show = 'show',
  page = 'page',
  query = 'query',
  limit = 'limit'
}

type MainPageProps = {
  data: {
    allShowsData: ShowSchema[];
    showData: DetailedShowSchema | null;
  };
}

export const getServerSideProps: GetServerSideProps<MainPageProps> = async (context) => {
  const { query, page, limit, show } = context.query

  const showData: DetailedShowSchema | null = show ? await fetchShowData(Number(show)) : null
  const allShowsData: ShowSchema[] = await fetchAllShowsData({page: Number(page), query, pageSize: Number(limit) || 30})

  return { props: { data: {
    allShowsData,
    showData,
  }}}
}

const Home = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {allShowsData, showData} = data
  const searchParams = useSearchParams()
  const router = useRouter()
  const isShowOpen = searchParams.get(MainPageRoutes.show);

  const closeDetailed = () => {
    if (isShowOpen) {
      const { pathname, query } = router;
      delete query.show;
      const updatedUrl = { pathname, query };
      router.replace(updatedUrl);
    }
  }

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
}

export default Home;
