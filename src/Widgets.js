import React from 'react'
import "./Widgets.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';
import Info from '@mui/icons-material/Info';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Karan is Back", "Karan")}
            {newsArticle("Top 10 World Changing Negotiations For 2024", "Forbes")}
            {newsArticle("International Business, World News & Global Stock Market Analysis", "CNBC")}
            {newsArticle("Tesla's Model Y is was the most popular new car in NL last year", "DutchNews")}
            
        </div>
    )
}

export default Widgets