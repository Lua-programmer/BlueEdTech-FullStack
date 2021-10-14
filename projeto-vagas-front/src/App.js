import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';

function App() {
  return (
    <div className="app">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/cadastro" component={Cadastro}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;