import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Review from './pages/ReviewPage';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
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
        <Route 
        path='/'
        element={<Home/>}
        />

        <Route 
        path='/Profile'
        element={<Profile/>}
         />
           <Route 
        path='/Review'
        element={<Review/>}
         />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>

   </ApolloProvider>
  );
}

export default App;
