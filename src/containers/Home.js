import React from 'react';
import TopStory from '../components/TopStory';
import Listing from './Listing';
import SingleTop from '../components/SingleTop';

const Home = ()=>{
    return(
        <div>
            <TopStory />
            <SingleTop />
            <Listing />
        </div>
    )
}

export default Home;