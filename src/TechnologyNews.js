import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import technoImg from './images/technonewss.jpg'

export default function TechnologyNews() {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-09-24&sortBy=publishedAt&apiKey=d3497b2c44e949b6b72d1803f576dee1')
            .then(res => res.json())
            .then(data => setNews(data.articles));
    }, [])
    console.log(news);
    return (
        <div id='technonews'>
            <h1 id='news-title'>Techno news</h1>
            <ul className='techno-news-comp'>
                {
                    news.map((e, index) => (
                        <a key={index} href={e.url}>
                            <li className='techno-news-item'>
                                <img src={e.urlToImage ? e.urlToImage : technoImg} alt="img" />
                                <div>
                                    {e.title}
                                </div>
                            </li>
                        </a>
                    ))
                }
            </ul>
        </div>
    )
}
