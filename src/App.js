import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import './App.css';
import Cargaison from './components/Cargaison';
import DetailsAerienne from './components/detailsCarg/DetailsAerienne';
import DetailsMaritime from './components/detailsCarg/DetailsMaritime';
import DetailsRoutiere from './components/detailsCarg/DetailsRoutiere';
import NouveauProduit from './components/form/NouveauProduit';
import NouvelleCargaison from './components/form/NouvelleCargaison';
import Login from './components/Login';
import About from './components/menu/About';
import Contact from './components/menu/Contact';
import Footer from './components/menu/Footer';
import Header from './components/menu/Header';
import Page404 from './components/menu/Page404';
import Aerienne from './components/typeCargaison/Aerienne';
import Maritime from './components/typeCargaison/Maritime';
import Routiere from './components/typeCargaison/Routiere';

function App() {
  
  return (
  
    <Router>
    <Header/>
    <div className="site-wrap" id="home-section">
       <Switch>
       {/* accueil */}
        <Route exact path="/" component={Login}/>
       
        {/* route cargaisons */}
        <Route exact path="/cargaison/" component={Cargaison}/>
        <Route path="/cargaison/aerienne/:numAer/detailsAerienne" component={DetailsAerienne}/>
        <Route path="/cargaison/maritime/:numMar/detailsMaritime" component={DetailsMaritime}/>
        <Route path="/cargaison/routiere/:numRou/detailsRoutiere" component={DetailsRoutiere}/>
        <Route  path="/cargaison/aerienne:idAerienne" component={Aerienne}/>
        <Route  path="/cargaison/routiere/:idRoutiere" component={Routiere}/>
        <Route  path="/cargaison/maritime/:idMaritime" component={Maritime}/>
        <Route  path="/cargaison/nouvelleCargaison" component={NouvelleCargaison}/>
        {/* route produit */}
        <Route  path="/produit/nouveauProduit" component={NouveauProduit}/>

        
        {/* a propos */}
        <Route  path="/about" component={About}/>
        {/* contact */}
        <Route  path="/contact" component={Contact}/>
        {/* error 404 */}
        <Route   component={Page404}/>
       </Switch>
    <Footer/>
    </div> 
    </Router>
    
  );
}

export default App;
