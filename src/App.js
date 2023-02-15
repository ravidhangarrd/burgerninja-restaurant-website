import Header from './components/Header';
import './App.css';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import Copyright from './components/Copyright'

const App = () => {
  return (
    <>
      <div id='navbar-container'>
        <Header />
      </div>
      <div id='body-container'>
        <MainBody />
      </div>
      <div id='footer-container'>
        <Footer />
      </div>
      <Copyright />
    </>
  );
}

export default App;
