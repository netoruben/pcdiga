import React, {FunctionComponent} from 'react';
import './news-card.css';

type Props = {
    title: string
    subtitle?: string
    image: string
}

const NewsCard: FunctionComponent<Props> = ({image, title, subtitle}) => {
    return (
        <div className='news-card'>
            <img alt={title} src={image}/>
            <div className='news-card-overlay'>
                <div>
                    <p className='news-card-title'>{title}{subtitle && <><br/><span className='news-card-subtitle'>{subtitle}</span></>}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
