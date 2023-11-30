import './assets/css/App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import PanelClima from './components/PanelClima';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <PanelClima/>
      <Footer/>
    </div>
  );
}

export default App;
