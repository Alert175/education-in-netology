import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Create from './Pages/Create';
import Home from './Pages/Main';
import Post from './Pages/Post';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts/new">
          <Create />
        </Route>
        <Route path="/posts/:postId">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
