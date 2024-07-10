import "./App.css";
import NavigationBar from "./components/Navigation";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Anime from "./components/Anime";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      <NavigationBar className="navbar" />
      {/* intro start*/}
      <div className="myBG">
        <Intro />
      </div>
      {/* intro end */}

      {/* trending start */}
      <div className="trending">
        <Trending />
      </div>
      {/* trending end     */}

      {/* Anime */}
      <div className="anime">
        <Anime />
      </div>
      {/* Anime end */}
    </div>
  );
}

export default App;
