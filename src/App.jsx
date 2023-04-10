import Nav from "./components/Nav/Nav";
import Content from "./components/Contnent/Content";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
   <div className="wrapper">
    <Nav />
    <div className="main">
      <Content />
    </div>
    <div className="footer">
    <Footer />
    </div>
   </div>
  );
}

export default App;
