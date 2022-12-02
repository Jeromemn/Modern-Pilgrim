import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useAuth0 } from '@auth0/auth0-react';


import Home from "./pages/Home";
import Profile from './pages/Profile';
import Review from './pages/TripReview';
import Trip from './pages/Trip';
// import Header from "./components/Header/SecondHeader";
// import HomeHeader from "./components/HomeHeader/HomeHeader";
// import Footer from "./components/Footer/Footer";
// import Search from "./components/Feed/Search";
// import Feed from "./components/Feed/index"

// add in auth middleware for auth system we set up

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/Review" element={<Review />} />

          {/* <Route path="/profiles/:username" element={<Profile/>} /> */}

          <Route path="/trips/:tripId" element={<Trip />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
