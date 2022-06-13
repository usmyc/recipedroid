import { Switch, Route } from "react-router-dom";

//styles
import "./App.css";

// page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/recipes/:id">
          <Recipe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
