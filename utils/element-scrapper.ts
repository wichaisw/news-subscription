import { title } from 'process';
import puppeteer from 'puppeteer';
import { INewsContent } from '../interfaces/newsContent';

const scrapeContent = async (site: string, path: string): Promise<INewsContent[]> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(site + path);

  const newsContentArr: INewsContent[] = [] as INewsContent[];

  let title: string = '';
  let imgSrc: string = '';
  let index = 1;

  while(true) {
    let [imgEl]: puppeteer.ElementHandle<Element>[] = await page.$x(`//*[@id="content"]/div[2]/div/div/div[${index}]/a/picture/img`);
    let [titleEl]: puppeteer.ElementHandle<Element>[] = await page.$x(`//*[@id="content"]/div[2]/div/div/div[${index}]/div/h2/a`);
  
    if(imgEl === undefined || !titleEl === undefined) {
      break;
    }
    
    title = await (await titleEl.getProperty('innerHTML')).jsonValue();
    imgSrc = await (await imgEl.getProperty('src')).jsonValue();  
    
    newsContentArr.push({title, imgSrc})

    index++
  }
  
  return newsContentArr;
}

export {
  scrapeContent
}