import logo from "./logo.svg";

import NavBar from "./Components/NavBar";
import Carousel from "./Components/carousel";
import About from "./Components/About";
import Thumbnail from "./Components/Thumbnail";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <About />
      <Thumbnail />
      <Footer />
    </div>
  );
}

export default App;
