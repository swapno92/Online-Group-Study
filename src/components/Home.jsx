// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Faq from "./Faq";
import Feature from "./Feature";

// import Banner from "./Banner";
// import Faq from "./Faq";
// import Feature from "./Feature";

const Home = () => {
    return (
        <div className="space-y-8">
          <Banner></Banner>
          <Feature></Feature>
          <Faq></Faq>
        </div>
    );
};

export default Home;