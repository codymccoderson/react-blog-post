import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <Route path='/' exact component={BlogList}/>
      <Route path='/posts/:{p-id}?' component={BlogPost}/>
    </Router>
  );
}

export default App;
