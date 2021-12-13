// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { INewsContent } from '../../interfaces/newsContent';
import { scrapeContent } from '../../utils/element-scrapper';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INewsContent[]>
) {

  const newsContentArr: INewsContent[] = await scrapeContent('https://www.theverge.com/', '');

  res.status(200).json(newsContentArr)
}
