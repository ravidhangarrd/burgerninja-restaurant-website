import Header from './components/Header';
import './App.css';
import MainBody from './components/MainBody';

const App = () => {
  return (
    <>
      <div id='navbar-container'>
        <Header />
      </div>
      <div id='body-container'>
        <MainBody />
      </div>
    </>
  );
}

export default App;
