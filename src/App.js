import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NewsContainer from './components/NewsContainer/NewsContainer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Services/>
      <NewsContainer/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;