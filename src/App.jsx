import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Alert } from "reactstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Alert color="warning"> Hey Pay attention!!!</Alert>
      <Main />
      <Footer />
    </div>
  );
}
export default App;
