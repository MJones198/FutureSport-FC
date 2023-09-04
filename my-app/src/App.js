
import './App.css';
import Header from './componets/Header/Header';
import Navbar  from './componets/Nav/Nav'
import Main from './componets/Main/Main'
import Footer from './componets/Footer/Footer';
import Videos from './componets/Main/Videos';



function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Videos/>  
      <Main/>
      <Footer/> 
         
    </div>
  );
}

export default App;
