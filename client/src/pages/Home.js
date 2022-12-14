//main exploring page
import React from 'react';
// import styled from 'styled-components';
import HomeHeader from "../components/HomeHeader/HomeHeader";
import FeedCont from "../components/Feed/index.js";
// import Search from "../components/Feed/Search";
import styled from "styled-components";
// import Filters from "../components/Feed/Filter.js";
import Navbar from "../components/Navigation/Navbar";

const SearchContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 1rem;
`;

// const FeedContainer = styled.div`
// display: flexbox;
// flex-wrap: wrap;

// `;

function Home() {
  return (
    <>
      <HomeHeader />
      <SearchContainer>{/* <Search /> */}</SearchContainer>
      <Navbar />
      
        {/* <CardContainer> */}

        <FeedCont />
        {/* </CardContainer> */}
      {/* </FeedContainer> */}
    </>
  );
}

export default Home;
