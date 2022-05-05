import "./App.scss";
import Header from "./components/header/header";
import Home from "./scenes/home/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="base">
      <Header />
      <Home />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
