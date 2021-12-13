import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import NewsCard from '../../components/NewsCard'
import { INewsContent } from "../../interfaces/newsContent";

interface IProps {
  newsData: INewsContent
}

const Main: NextPage<IProps> = ({newsContentArr}: InferGetServerSidePropsType<GetServerSideProps> ) => {
  return (
    <main className='bg-slate-200 w-full min-h-screen flex justify-center'>
      <div className="flex flex-col space-y-4 p-4 w-full lg:w-1/2">
        {
          newsContentArr.map((news: INewsContent) => {
            return <NewsCard title={news.title} imgSrc={news.imgSrc} key={news.title} />
          })
        }
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/feed`)
  const newsContentArr: INewsContent[] = await res.json()
  
  console.info('crawled');

  return {
    props: { newsContentArr }
  }
}


export default Main;