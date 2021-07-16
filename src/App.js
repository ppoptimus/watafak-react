import { Route, Switch } from "react-router-dom";
import Main from "./main";
import Promotion from "./promotion";
import Article from "./article";
import Download from "./download";
import AllJackpot from './jackpot-all'
import GenerateJackpot from "./jackpot-generate";
import Header from "./header";
import FooterDesktop from "./footer-desktop";
import FooterMobile from "./footer-mobile";
import Login from "./login";
import PlayGame from "./playGame";
import Register from "./register";
import Pro_1 from "./promotions/pro-1";
import Pro_2 from "./promotions/pro-2";
import Pro_3 from "./promotions/pro-3";
import Pro_4 from "./promotions/pro-4";
import Pro_5 from "./promotions/pro-5";
import Pro_6 from "./promotions/pro-6";

function App() {
  return (
    <div>
      <Header />

      {/* Router */}
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/promotion">
          <Promotion />
        </Route>
        <Route exact path="/article">
          <Article />
        </Route>
        <Route exact path="/download">
          <Download />
        </Route>
        <Route exact path="/alljackpot">
          <AllJackpot />
        </Route>
        <Route exact path="/generate">
          <GenerateJackpot />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/playgame">
          <PlayGame />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/pro1">
          <Pro_1 />
        </Route>
        <Route exact path="/pro2">
          <Pro_2 />
        </Route>
        <Route exact path="/pro3">
          <Pro_3 />
        </Route>
        <Route exact path="/pro4">
          <Pro_4 />
        </Route>
        <Route exact path="/pro5">
          <Pro_5 />
        </Route>
        <Route exact path="/pro6">
          <Pro_6 />
        </Route>
      </Switch>

      <FooterDesktop />

      <div className="line-button">
        <a href="https://lin.ee/bDb5ic7" target="blank">
          <img
            rel="preload"
            as="image"
            imagesizes="50vw"
            src="img/line_icon.svg"
            className="img-fluid"
          ></img>
        </a>
      </div>

      <div className="facebook-button">
        <a href="https://www.facebook.com/Watafak88/" target="blank">
          <img
            rel="preload"
            as="image"
            imagesizes="50vw"
            src="img/facebook_icon.svg"
            className="img-fluid"
          ></img>
        </a>
      </div>

      <FooterMobile />
    </div>
  );
}

export default App;
