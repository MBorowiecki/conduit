import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Page components
import { Article, ArticleList } from "features/articles/presentation";
import Editor from "Editor";
import { LoginRegister } from "features/authentication/presentation";
import Logout from "Logout";
import { Profile } from "features/profile/presentation";
import { Settings } from "features/settings/presentation";

const ApplicationRouter = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/editor" exact component={Editor} />
        <Route path="/editor/:slug" exact component={Editor} />
        <Route path="/login" exact component={LoginRegister} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/profile/:username" exact component={Profile} />
        <Route path="/profile/:username/favorites" exact component={Profile} />
        <Route path="/register" exact component={LoginRegister} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/:slug" exact component={Article} />
        <Route path="/" component={ArticleList} />
      </Switch>
    </Router>
  );
};

export default ApplicationRouter;
