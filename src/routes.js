import { BrowserRouter, Switch, Route } from "react-router-dom";
import DiscoverPage from "./pages/discover/discoverPage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DiscoverPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
