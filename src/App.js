
import React from "react"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Information from './Pages/Information';

import Report from './Pages/Report';
import Map from './Pages/Map';
import Quizstart from './Pages/Quizstart';
import Quizmain from './Pages/Quizmain';
import Quizend from './Pages/Quizend';
import Quizhelp from './Pages/Quizhelp';

import Address from './Pages/Address';

import Chatroom from './Pages/Chatroom' ;

import './App.css'



function App() {
  return (
    <div>
      <Router className = "ul">
          
            <Switch>
              <Route path= '/' exact component = {Home} />
              <Route path= '/Information' exact component = {Information} />
             
             
             
              <Route path= '/Map' exact component = {Map} />
              <Route path= '/Quizstart' exact component = {Quizstart} />
              <Route path= '/Quizmain' exact component = {Quizmain} />
              <Route path= '/Quizend' exact component = {Quizend} />
              <Route path= '/Quizhelp' exact component = {Quizhelp} />
              <Route path= '/Report' exact component = {Report} />
              <Route path= '/address' exact component = {Address} />
              
              <Route path= '/Chatroom' component = {Chatroom}/>
        </Switch>
      </Router>,

    </div>
  );
}

export default App;
