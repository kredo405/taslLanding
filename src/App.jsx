import Nav from "./components/Nav/Nav";
import Content from "./components/Contnent/Content";
import Footer from "./components/Footer/Footer";
import Simulator from "./pages/Simulator";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from 'react-router';
import "./App.css";

function App() {
  const state = useSelector(state => state);


  return (
    <div className={state.themeSlice.theme}>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/page404" />} />
        <Route path="/" element={
          <div className="wrapper">
            <Nav />
            <div className="main">
              <Content />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        } />
        <Route path="/simulator" element={<Simulator />} />
      </Routes>
    </div>


  );
}

export default App;
