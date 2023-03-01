import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainMenu from './components/MainMenu';

function App() {




  return (
    <>
    <Header/>
    <MainMenu />
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
