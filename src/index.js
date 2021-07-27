import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';
// import { HashRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App';

const main = lazy(() => import("./main"));
const promotion = lazy(() => import("./promotion"));
const article = lazy(() => import("./article"));
const download = lazy(() => import("./download"));
const alljackpot = lazy(() => import('./jackpot-all'));
const generate = lazy(() => import("./jackpot-generate"));
const Header = lazy(() => import("./header"));
const FooterDesktop = lazy(() => import("./footer-desktop"));
const FooterMobile = lazy(() => import("./footer-mobile"));
const login = lazy(() => import("./login"));
const playgame = lazy(() => import("./playGame"));
const register = lazy(() => import("./register"));
const pro1 = lazy(() => import("./promotions/pro-1"));
const pro2 = lazy(() => import("./promotions/pro-2"));
const pro3 = lazy(() => import("./promotions/pro-3"));
const pro4 = lazy(() => import("./promotions/pro-4"));
const pro5 = lazy(() => import("./promotions/pro-5"));
const pro6 = lazy(() => import("./promotions/pro-6"));

ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
    <Header />
      <Switch>
        <Route exact path="/" component={main}/>
        <Route path="/promotion" component={promotion}/>
        <Route path="/article" component={article}/>
        <Route path="/download" component={download}/>
        <Route path="/alljackpot" component={alljackpot}/>
        <Route path="/generate" component={generate}/>
        <Route path="/login" component={login}/>
        <Route path="/playgame" component={playgame}/>
        <Route path="/register" component={register}/>
        <Route path="/pro1" component={pro1}/>
        <Route path="/pro2" component={pro2}/>
        <Route path="/pro3" component={pro3}/>
        <Route path="/pro4" component={pro4}/>
        <Route path="/pro5" component={pro5}/>
        <Route path="/pro6" component={pro6}/>
        
      </Switch>
      <FooterDesktop />
      <FooterMobile />
    </Suspense>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
