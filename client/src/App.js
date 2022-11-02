import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import BgCurveDesktop from './components/images/bg-curve-desktop.svg';
import BgCurveMobile from './components/images/bg-curve-mobile.svg';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div className="main__imageSection-container">
        <img src={BgCurveMobile} className="bg__curve-mobile" alt="curved section divider" />
        <img src={BgCurveDesktop} className="bg__curve-desktop" alt="curved section divider" />
      </div>
      <Main />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
