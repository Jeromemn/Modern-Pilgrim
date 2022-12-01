import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// import { Cloudinary } from '@cloudinary/url-gen';
// import {AdvancedImage} from '@cloudinary/react';
// import {fill} from "@cloudinary/url-gen/actions/resize";
import Home from "./pages/Home";
// import Profile from "./pages/Profile";
import Review from "./pages/TripReview";
import Signup from "./pages/SignUp";
import Login from "./pages/Login"
import Trip from "./pages/Trip"
import Logout from './pages/Logout'
import Header from "./components/Header/SecondHeader";
import HomeHeader from "./components/HomeHeader/HomeHeader"
import Footer from "./components/Footer/Footer";
import Search from "./components/Feed/Search"
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
        {/* <div> */}
          {/* <HomeHeader /> */}
        {/* <Home /> */}
        {/* </div> */}
        {/* <div> */}
        {/* </div> */}
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/* <Route path="/myProfile" element={<Profile />} /> */}
          <Route path="/review" element={<Review />} />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/signup" element={<Signup />} />

          {/* <Route path="/tr" element={<Search/>} /> */}

          {/* <Route path="/profiles/:username" element={<Profile/>} /> */}

          <Route path="/trips/:tripid" element={<Trip/>} />
          {/* <Route path="/search" element={<Search/>} /> */}
        </Routes>
        <div>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
