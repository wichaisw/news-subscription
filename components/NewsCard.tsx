import { FunctionComponent, useEffect } from "react";
import { InferGetServerSidePropsType } from 'next';
import { scrapeContent } from '../utils/element-scrapper';
import { INewsContent } from "../interfaces/newsContent";

const NewsCard = ({ title, imgSrc }: INewsContent) => {

  useEffect(() => {
    console.log(title);
  }, []) 

  return (
    <article className="rounded-md shadow-lg p-2 bg-white w-full">
      <h4>{title}</h4>
      <img src={imgSrc} alt={title} />
    </article>
  )
}

export default NewsCard;