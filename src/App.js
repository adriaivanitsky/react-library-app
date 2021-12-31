import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route exact path="/">
            <Link to="/books">view books</Link>
          </Route>
          <Route exact path="/books" component={BookList} />
          <Route path="/books/:id" component={BookDetail} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
