
import './App.css';
import Header from './componets/Header/Header';
import Navbar  from './componets/Nav/Nav'
// import Main from './componets/Main/Main'
import Footer from './componets/Footer/Footer';
import Videos from './componets/Main/Videos';
import Store from './componets/Main/Store';
// import SeasonStats from './componets/Main/SeasonStats';
import SeasonStatsbase from './componets/Main/SeasonStatsbase';
import News from './componets/Main/News';
import TeamReview from './componets/Main/TeamReview';
import YouthProgram from './componets/Main/YouthProgram';
import Form from './componets/Main/Form';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Videos/>
      {/* Trying to pull data from a data sheet in TableData but doesnt seem to want to run */}
      {/* <SeasonStats/>   */}
      <SeasonStatsbase/>
      <Store />
      <News />
      <TeamReview />
      <YouthProgram />
      <Form />

      <Footer/> 
         
    </div>
  );
}

export default App;
