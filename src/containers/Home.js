import React from 'react';
import TopStory from '../components/TopStory';
import Listing from './Listing';
import SingleTop from '../components/SingleTop';

const Home = ()=>{
    return(
        <div>
            <SingleTop />
            <TopStory />
            <Listing />
        </div>
    )
}

export default Home;