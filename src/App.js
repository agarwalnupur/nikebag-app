import './App.css';
import NavBar from './components/main/navbar';

import BuyNow from './components/main/buynow';
import Track from './components/main/track';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';


function App() {
  return (

    <>
           
   <BrowserRouter>
     
    <NavBar/>
        <Switch>
           
        <Route path="/" exact><Welcome/></Route>
           <Route exact path='/buynow'><BuyNow/></Route>
           <Route path='/trackorder' exact><Track/></Route>
         </Switch>
         </BrowserRouter>
  </>
  );
}

export default App;
