import { BrowserRouter, Switch, Route } from "react-router-dom";
import DiscoverPage from "./pages/discover/discoverPage";
import SearchPage from "./pages/search/searchPage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DiscoverPage} />
      <Route path="/search" component={SearchPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
