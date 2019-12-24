import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PostPage = lazy(() => import("./pages/PostPage/PostPage"));
const AddPostPage = lazy(() => import("./pages/AddPostPage/AddPostPage"));

const App = () => (
  <Switch>
    <ErrorBoundary>
      <Suspense fallback={<div>loading...</div>}>
        <Route exact path="/" render={() => <Redirect to="/posts" />} />
        <Route exact path="/posts" component={HomePage} />
        <Route path="/posts/:id" component={PostPage} />
        <Route path="/add/post" component={AddPostPage} />
      </Suspense>
    </ErrorBoundary>
  </Switch>
);

export default App;
