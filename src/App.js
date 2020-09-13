import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header';
import SlideBar from './component/SlideBar';

import PlaceFetch from './component/PlaceFetch';
import RideServices from './component/RideServices';
import GuideServices from './component/GuideServices';
import About from './component/About';
import Contact from './component/Contact';
import PlaceDetailsMap from './component/PlaceDetailsMap';






function App() {
  return (
    <div>
      <Header></Header>
      <SlideBar></SlideBar>
       <Router>
      <Switch>
          <Route path="/home">
          <PlaceFetch></PlaceFetch>
          <About></About>
          <Contact></Contact>
          </Route>
          <Route path="/ourServices">
          <RideServices></RideServices>
      <GuideServices></GuideServices>
          </Route>
          <Route path="/contactUs">
          <PlaceFetch></PlaceFetch>
          <About></About>
          <Contact></Contact>
         </Route>
         <Route path="/place/:placeName">
           <PlaceDetailsMap></PlaceDetailsMap>
         </Route>
         <Route exact path="/">
          <PlaceFetch></PlaceFetch>
          <About></About>
          <Contact></Contact>
         </Route>
          <Route path="/aboutUs">
          <PlaceFetch></PlaceFetch>
          <About></About>
          <Contact></Contact>
          
            
          </Route>
        </Switch>
     
    </Router>
      
   </div>
  );
}

export default App;

