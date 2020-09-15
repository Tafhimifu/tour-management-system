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
import GuideServicesFetch from './component/GuideServicesFetch';






function App() {
  return (
    <div>
      <Header></Header>
      
       <Router>
      <Switch>
          <Route path="/home">
          <SlideBar></SlideBar>
          <PlaceFetch></PlaceFetch>
          <About></About>
          <Contact></Contact>
          </Route>
          <Route path="/ourServices">
          <RideServices></RideServices>
      <GuideServicesFetch></GuideServicesFetch>
          </Route>
          <Route path="/contactUs">
          <SlideBar></SlideBar>
          <PlaceFetch></PlaceFetch>
          <About></About>
          <Contact></Contact>
         </Route>
         <Route path="/place/:placeName">
         <SlideBar></SlideBar>
           <PlaceDetailsMap></PlaceDetailsMap>
         </Route>
         <Route exact path="/">
         <SlideBar></SlideBar>
          <PlaceFetch></PlaceFetch>
          <About></About>
          <Contact></Contact>
         </Route>
          <Route path="/aboutUs">
          <SlideBar></SlideBar>
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

