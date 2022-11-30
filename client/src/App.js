import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Review from "./pages/Tripreview";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Header from "./components/Header";
import Footer from "./components/Footer";



// add in auth middleware for auth system we set up 

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/myProfile" element={<Profile />} />
          <Route path="/Review" element={<Review />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/profiles/:username" element={<Profile/>} />

          <Route path="/trips/:tripid" element={<Trip/>} />

        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
