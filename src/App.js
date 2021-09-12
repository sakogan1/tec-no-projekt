import React       from "react";
import './App.css';
import SearchSomeYoutbe from "./SearchSomeYoutube";
import MiddleComponentSpotify from "./components/api/middleComponentSpotify"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'reactstrap';
import Bar from "./components/navbar"
import About from "./components/about"
import CardsFirebase from "./CardsFirebase";
import SpotiPl from "./components/SpotiPl"
import Dashboard from "./components/Dashboard"
import RedirectPage from "./components/RedirectPage"
import Register from "./components/Register"
import {useState} from "react"
import LoginFirebase from "./components/LoginFirebase"
import UserSelections from "./components/FansSelections"

 

function App() {
  const [user, setUser] = useState(null)
  return (
    
    <div className="app">
       <Container className="themed-container" fluid={true}>
      <Router> 
       
          <Bar setUser={setUser} user={user}/> 
          <Switch> 
              {/* <Route path="/" component={Home} exact={true} /> */}
            <Route path="/redirect" component={RedirectPage} />
            <Route path="/dashboard" component={Dashboard} />
            {/* <Route path="/register" component={Register} user={user} setUser={setUser} /> */}
            <Route path="/spoti" component={SpotiPl} />
     

            <Route path="/" exact>
            <LoginFirebase setUser={setUser} user={user}/>
          </Route>
          <Route path="/register">
          <Register setUser={setUser} user={user}/>
          </Route>
      
      <Route path="/top">
        <MiddleComponentSpotify setUser={setUser} user={user}/>
        </Route>

      <Route path="/cards" component ={CardsFirebase}  />
      <Route path="/selections" component ={UserSelections}  /> 
      <Route path="/search" component ={SearchSomeYoutbe}  />
      <Route path="/about" component ={About}  />   
      
     

      
 </Switch>

  </Router>
  </Container>
    </div>
  );
}

export default App;
