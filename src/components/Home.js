import React from 'react';
import TopStory from '../containers/TopStory';
import Listing from '../containers/Listing';
import SingleTop from './SingleTop';
import StoryWidthAd from '../containers/StoryWidthAd';

const Home = ()=>{
    return(
        <div>
            <TopStory />
            <SingleTop />
            <div className="feed feed-list">
                <StoryWidthAd />
                <Listing />
            </div>
        </div>
    )
}

export default Home;