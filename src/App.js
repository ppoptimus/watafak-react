import { Link, Route, Switch } from "react-router-dom";
import Main from "./main";
import Promotion from "./promotion";
import Article from "./article";
import Download from "./download";
import AllJackpot from './jackpot-all'
import GenerateJackpot from "./jackpot-generate";
import Header from "./header";
import Footer_desktop from "./footer-desktop";
import Footer_Mobile from "./footer-mobile";
import Login from "./login";
import PlayGame from "./playGame";
import Register from "./register";

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
      </Switch>

      <Footer_desktop />

      {/* Marquee-game */}
      {/* <div className="container-marq">
        <div className="marquee-game">
          <div className="img-marq">
            <img src="img/game/game1.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game2.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game3.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game4.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game5.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game6.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game7.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game8.png" className="img-box1" />
          </div>
        </div>
      </div> */}

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

      <Footer_Mobile />
    </div>
  );
}

export default App;
