import React from 'react';
import NewsCard from '../common/news-card/news-card';
import NewsData from '../../data/news';
import './news.css';

function News() {

  const news: JSX.Element[] = []

  NewsData.forEach((single_news) => {
    news.push(<NewsCard image={single_news.image} title={single_news.title} subtitle={single_news.subtitle}/>)
  })

  return (
    <section className='news'>
      {news}
    </section>
  );
}

export default News;
